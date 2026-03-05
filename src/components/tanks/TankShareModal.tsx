/**
 * TankShareModal.tsx
 * OG-image share modal for real / tracked tanks (My Tanks dashboard).
 * Distinct from SharePreviewModal (Tank Builder) – shows exact measured
 * parameter values, useful for getting help on Reddit / forums.
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Share2, Check, Loader2, FileText, Image } from 'lucide-react';
import { Tank } from '../../types/tank';
import { generateTankDetailImage, generateTankTextSummary } from '../../utils/tank-detail-canvas';

interface Props {
  open: boolean;
  tank: Tank;
  onClose: () => void;
}

type ActionState = 'idle' | 'done';

export const TankShareModal = ({ open, tank, onClose }: Props) => {
  const [dataUrl, setDataUrl]           = useState<string | null>(null);
  const [loading, setLoading]           = useState(false);
  const [copyImgState, setCopyImgState] = useState<ActionState>('idle');
  const [copyTxtState, setCopyTxtState] = useState<ActionState>('idle');
  const [canShare, setCanShare]         = useState(false);

  // Escape + scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, onClose]);

  // Regenerate canvas whenever modal opens
  useEffect(() => {
    if (!open) return;
    setLoading(true);
    setDataUrl(null);
    generateTankDetailImage(tank)
      .then(url => { setDataUrl(url); setLoading(false); })
      .catch(() => setLoading(false));
  }, [open]); // eslint-disable-line

  useEffect(() => {
    setCanShare(typeof navigator.share === 'function');
  }, []);

  const handleDownload = () => {
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `aquaguide-${tank.name.replace(/\s+/g, '-').toLowerCase()}.png`;
    a.click();
  };

  const handleCopyText = async () => {
    const text = generateTankTextSummary(tank);
    try { await navigator.clipboard.writeText(text); } catch { prompt('Copy this:', text); }
    setCopyTxtState('done');
    setTimeout(() => setCopyTxtState('idle'), 2200);
  };

  const handleWebShare = async () => {
    const text = generateTankTextSummary(tank);
    try {
      if (canShare && dataUrl) {
        const res  = await fetch(dataUrl);
        const blob = await res.blob();
        const file = new File([blob], 'aquaguide-tank.png', { type: 'image/png' });
        await navigator.share({ title: tank.name, text, files: [file] });
      } else if (canShare) {
        await navigator.share({ title: tank.name, text });
      } else {
        await handleCopyText();
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
            <div
              className="pointer-events-auto w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image className="w-5 h-5 text-white" />
                  <div>
                    <h2 className="text-lg font-black text-white">Share my Tank</h2>
                    <p className="text-teal-100 text-xs mt-0.5">
                      Exact water values – perfect for Reddit &amp; forums
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {/* Canvas preview */}
                <div className="rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 aspect-[1200/630] flex items-center justify-center">
                  {loading && (
                    <div className="flex flex-col items-center gap-3 text-slate-400">
                      <Loader2 className="w-10 h-10 animate-spin text-teal-500" />
                      <span className="text-sm font-semibold">Generating preview…</span>
                    </div>
                  )}
                  {dataUrl && !loading && (
                    <img src={dataUrl} alt="Tank share preview" className="w-full h-full object-cover" />
                  )}
                </div>

                {/* Hint */}
                <p className="mt-3 text-center text-xs text-slate-400 dark:text-slate-500">
                  Shows your real measured values – ideal for getting help online
                </p>

                {/* Action buttons */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {/* Download PNG */}
                  <button
                    onClick={handleDownload}
                    disabled={!dataUrl}
                    className="flex flex-col items-center gap-2 py-4 rounded-2xl font-bold text-sm bg-teal-600 hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-all shadow-lg shadow-teal-500/25"
                  >
                    <Download className="w-6 h-6" />
                    Download PNG
                  </button>

                  {/* Copy as Text (Reddit) */}
                  <button
                    onClick={handleCopyText}
                    className={`flex flex-col items-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all ${
                      copyTxtState === 'done'
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-600 dark:hover:text-teal-400'
                    }`}
                  >
                    {copyTxtState === 'done' ? <Check className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                    {copyTxtState === 'done' ? 'Copied!' : 'Copy Text'}
                  </button>

                  {/* Web Share / fallback */}
                  <button
                    onClick={handleWebShare}
                    className="flex flex-col items-center gap-2 py-4 rounded-2xl font-bold text-sm bg-gradient-to-br from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white transition-all shadow-lg shadow-cyan-500/25"
                  >
                    <Share2 className="w-6 h-6" />
                    {canShare ? 'Share\u2026' : 'Copy Text'}
                  </button>
                </div>

                <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
                  <span className="font-semibold text-teal-500">Copy Text</span> gives a Reddit-ready markdown summary
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
