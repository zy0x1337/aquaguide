import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Download, Share2, Check, Loader2, Link } from 'lucide-react';
import { TankConfig, TankItem } from '../../types/builder';
import { generateTankPreview, PreviewStats } from '../../utils/tank-preview-canvas';
import { generateShareURL, copyToClipboard } from '../../utils/tank-share';

interface Props {
  open: boolean;
  tankConfig: TankConfig;
  items: TankItem[];
  stats: PreviewStats;
  onClose: () => void;
}

type CopyState = 'idle' | 'copied';

export const SharePreviewModal = ({ open, tankConfig, items, stats, onClose }: Props) => {
  const [dataUrl, setDataUrl]       = useState<string | null>(null);
  const [loading, setLoading]       = useState(false);
  const [copyState, setCopyState]   = useState<CopyState>('idle');
  const [canShare, setCanShare]     = useState(false);
  const shareUrl = generateShareURL(tankConfig, items);

  // Escape to close + scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, onClose]);

  // Generate preview when modal opens
  useEffect(() => {
    if (!open) return;
    setLoading(true);
    setDataUrl(null);
    generateTankPreview(tankConfig, items, stats, shareUrl)
      .then(url => { setDataUrl(url); setLoading(false); })
      .catch(() => setLoading(false));
  }, [open]); // eslint-disable-line

  // Check Web Share API support
  useEffect(() => {
    setCanShare(typeof navigator.share === 'function');
  }, []);

  const handleCopyLink = async () => {
    const ok = await copyToClipboard(shareUrl);
    if (ok) {
      window.history.replaceState({}, '', shareUrl);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2000);
    }
  };

  const handleDownload = () => {
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `aquaguide-${tankConfig.name.replace(/\s+/g, '-').toLowerCase()}.png`;
    a.click();
  };

  const handleWebShare = async () => {
    if (!canShare) return;
    try {
      if (dataUrl) {
        const res  = await fetch(dataUrl);
        const blob = await res.blob();
        const file = new File([blob], `aquaguide-tank.png`, { type: 'image/png' });
        await navigator.share({ title: tankConfig.name, url: shareUrl, files: [file] });
      } else {
        await navigator.share({ title: tankConfig.name, url: shareUrl });
      }
    } catch (_) { /* user cancelled */ }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 32 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={  { opacity: 0, scale: 0.92, y: 32  }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>

              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Share2 className="w-5 h-5 text-white" />
                  <div>
                    <h2 className="text-lg font-black text-white">Share your tank</h2>
                    <p className="text-indigo-200 text-xs mt-0.5">Preview how it looks when shared</p>
                  </div>
                </div>
                <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Preview canvas area */}
              <div className="p-6">
                <div className="rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 aspect-[1200/630] flex items-center justify-center">
                  {loading && (
                    <div className="flex flex-col items-center gap-3 text-slate-400">
                      <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
                      <span className="text-sm font-semibold">Generating preview…</span>
                    </div>
                  )}
                  {dataUrl && !loading && (
                    <img src={dataUrl} alt="Tank preview" className="w-full h-full object-cover" />
                  )}
                </div>

                {/* Share URL pill */}
                <div className="mt-4 flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3">
                  <Link className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 flex-1 truncate">{shareUrl}</span>
                </div>

                {/* Action buttons */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {/* Copy Link */}
                  <button
                    onClick={handleCopyLink}
                    className={`flex flex-col items-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all ${
                      copyState === 'copied'
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    {copyState === 'copied'
                      ? <Check className="w-6 h-6" />
                      : <Copy className="w-6 h-6" />
                    }
                    {copyState === 'copied' ? 'Copied!' : 'Copy Link'}
                  </button>

                  {/* Download PNG */}
                  <button
                    onClick={handleDownload}
                    disabled={!dataUrl}
                    className="flex flex-col items-center gap-2 py-4 rounded-2xl font-bold text-sm bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-all shadow-lg shadow-indigo-500/30"
                  >
                    <Download className="w-6 h-6" />
                    Download PNG
                  </button>

                  {/* Web Share API */}
                  <button
                    onClick={canShare ? handleWebShare : handleCopyLink}
                    className="flex flex-col items-center gap-2 py-4 rounded-2xl font-bold text-sm bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all shadow-lg shadow-purple-500/30"
                  >
                    <Share2 className="w-6 h-6" />
                    {canShare ? 'Share…' : 'Copy Link'}
                  </button>
                </div>

                <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
                  Share the link with friends or post the PNG on social media
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
