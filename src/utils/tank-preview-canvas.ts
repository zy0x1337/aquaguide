import { TankConfig, TankItem } from '../types/builder';
import { Species } from '../types/species';
import { Plant } from '../types/plant';

export interface PreviewStats {
  stockingPercentage: number;
  tempRange?: { min: number; max: number };
  phRange?:   { min: number; max: number };
}

const W = 1200;
const H = 630;

/** Draws a rounded rectangle path (CanvasRenderingContext2D helper) */
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export async function generateTankPreview(
  tankConfig: TankConfig,
  items: TankItem[],
  stats: PreviewStats,
  shareUrl: string
): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // ─── Background gradient ──────────────────────────────────────────────────
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0,   '#0f172a'); // slate-900
  bg.addColorStop(0.5, '#1e1b4b'); // indigo-950
  bg.addColorStop(1,   '#0c1445');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // ─── Bokeh circles ──────────────────────────────────────────────────────
  const bokeh: [number, number, number, string][] = [
    [900,  80,  160, 'rgba(99,102,241,0.18)'],
    [200, 480,  120, 'rgba(99,102,241,0.12)'],
    [1050,400,  200, 'rgba(139,92,246,0.14)'],
    [80,  120,   90, 'rgba(59,130,246,0.10)'],
    [650, 550,  140, 'rgba(99,102,241,0.08)'],
  ];
  bokeh.forEach(([bx, by, br, bc]) => {
    const g = ctx.createRadialGradient(bx, by, 0, bx, by, br);
    g.addColorStop(0, bc);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(bx, by, br, 0, Math.PI * 2);
    ctx.fill();
  });

  // ─── Wave decoration (bottom) ──────────────────────────────────────────
  const wave = ctx.createLinearGradient(0, H - 100, 0, H);
  wave.addColorStop(0, 'rgba(99,102,241,0.08)');
  wave.addColorStop(1, 'rgba(99,102,241,0.22)');
  ctx.fillStyle = wave;
  ctx.beginPath();
  ctx.moveTo(0, H - 70);
  ctx.bezierCurveTo(300, H - 110, 600, H - 40, 900, H - 80);
  ctx.bezierCurveTo(1050, H - 100, 1150, H - 55, W, H - 70);
  ctx.lineTo(W, H); ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fill();

  // ─── Logo badge (top-left) ───────────────────────────────────────────────
  const logoGrad = ctx.createLinearGradient(52, 44, 92, 84);
  logoGrad.addColorStop(0, '#6366f1');
  logoGrad.addColorStop(1, '#8b5cf6');
  roundRect(ctx, 52, 44, 44, 44, 12);
  ctx.fillStyle = logoGrad;
  ctx.fill();
  ctx.font = 'bold 26px sans-serif';
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.fillText('A', 74, 76);

  ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = '#e2e8f0';
  ctx.textAlign = 'left';
  ctx.fillText('AquaGuide', 108, 74);

  // ─── Tank name ─────────────────────────────────────────────────────────
  const nameGrad = ctx.createLinearGradient(0, 150, W * 0.7, 230);
  nameGrad.addColorStop(0, '#ffffff');
  nameGrad.addColorStop(1, '#a5b4fc');
  ctx.font = `bold 72px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.fillStyle = nameGrad;
  ctx.textAlign = 'left';
  const displayName = tankConfig.name.length > 26 ? tankConfig.name.slice(0, 26) + '…' : tankConfig.name;
  ctx.fillText(displayName, 56, 210);

  // ─── Sub-line (volume + counts) ────────────────────────────────────────────
  const fishCount  = items.filter(i => i.type === 'fish').reduce((s, i) => s + (i.count || 1), 0);
  const plantCount = items.filter(i => i.type === 'plant').length;
  const speciesCount = new Set(items.filter(i => i.type === 'fish').map(i => (i.data as Species).id)).size;

  const dots: [string, string][] = [
    ['#6366f1', `${tankConfig.volume}L`],
    ['#06b6d4', `${fishCount} fish  (${speciesCount} species)`],
    ['#10b981', `${plantCount} plants`],
  ];
  let dotX = 56;
  dots.forEach(([color, label]) => {
    ctx.beginPath();
    ctx.arc(dotX + 8, 248, 8, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.font = '26px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'left';
    ctx.fillText(label, dotX + 24, 256);
    dotX += ctx.measureText(label).width + 56;
  });

  // ─── Stat Cards row ─────────────────────────────────────────────────────
  const stocking = Math.min(stats.stockingPercentage || 0, 100);
  const stockingColor = stocking >= 90 ? '#ef4444' : stocking >= 70 ? '#f59e0b' : '#10b981';
  const tempStr = stats.tempRange ? `${stats.tempRange.min}–${stats.tempRange.max}°C` : '–';
  const phStr   = stats.phRange   ? `${stats.phRange.min}–${stats.phRange.max}`      : '–';

  const statCards: { icon: string; label: string; value: string; accent: string }[] = [
    { icon: '🐟', label: 'Stocking',    value: `${stocking}%`,  accent: stockingColor },
    { icon: '🌡️', label: 'Temperature', value: tempStr,         accent: '#f97316' },
    { icon: '💧', label: 'pH Range',    value: phStr,           accent: '#38bdf8' },
  ];

  const cardW = 280; const cardH = 120; const cardY = 300; const cardGap = 32;
  const totalCardW = statCards.length * cardW + (statCards.length - 1) * cardGap;
  let cardX = 56;

  statCards.forEach(card => {
    // Card background
    roundRect(ctx, cardX, cardY, cardW, cardH, 16);
    ctx.fillStyle = 'rgba(255,255,255,0.07)';
    ctx.fill();
    roundRect(ctx, cardX, cardY, cardW, cardH, 16);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Accent bar left edge
    roundRect(ctx, cardX, cardY + 16, 4, cardH - 32, 2);
    ctx.fillStyle = card.accent;
    ctx.fill();

    // Icon + label
    ctx.font = '20px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'left';
    ctx.fillText(`${card.icon}  ${card.label}`, cardX + 20, cardY + 42);

    // Value
    ctx.font = `bold 40px -apple-system, BlinkMacSystemFont, sans-serif`;
    ctx.fillStyle = '#f1f5f9';
    ctx.fillText(card.value, cardX + 20, cardY + 92);

    cardX += cardW + cardGap;
  });

  // Stocking progress bar (under first card)
  const barX = 56; const barY = cardY + cardH + 16; const barW = cardW; const barH = 6;
  roundRect(ctx, barX, barY, barW, barH, 3);
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  ctx.fill();
  if (stocking > 0) {
    roundRect(ctx, barX, barY, barW * (stocking / 100), barH, 3);
    ctx.fillStyle = stockingColor;
    ctx.fill();
  }

  // ─── Species list ─────────────────────────────────────────────────────────
  const fishItems = items.filter(i => i.type === 'fish');
  const FISH_COLORS = ['#6366f1','#8b5cf6','#06b6d4','#10b981','#f59e0b','#ef4444','#ec4899','#14b8a6'];
  const MAX_TAGS = 5;
  const tagY = barY + 40;
  let tagX = 56;

  const seen = new Set<string>();
  const uniqueFish = fishItems.filter(i => {
    const id = (i.data as Species).id;
    if (seen.has(id)) return false;
    seen.add(id); return true;
  }).slice(0, MAX_TAGS);

  uniqueFish.forEach((item, idx) => {
    const name = (item.data as Species).taxonomy.commonName;
    const color = FISH_COLORS[idx % FISH_COLORS.length];
    const shortName = name.length > 18 ? name.slice(0, 18) + '…' : name;

    ctx.font = '20px -apple-system, BlinkMacSystemFont, sans-serif';
    const tw = ctx.measureText(shortName).width + 40;

    if (tagX + tw > W - 56) return;

    roundRect(ctx, tagX, tagY, tw, 36, 18);
    ctx.fillStyle = color + '33';
    ctx.fill();
    roundRect(ctx, tagX, tagY, tw, 36, 18);
    ctx.strokeStyle = color + '88';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(tagX + 16, tagY + 18, 6, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.fillStyle = '#e2e8f0';
    ctx.textAlign = 'left';
    ctx.fillText(shortName, tagX + 28, tagY + 25);
    tagX += tw + 12;
  });

  if (fishItems.length > MAX_TAGS) {
    const more = `+${fishItems.length - MAX_TAGS} more`;
    ctx.font = '20px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.textAlign = 'left';
    ctx.fillText(more, tagX + 4, tagY + 25);
  }

  // ─── URL watermark (bottom right) ────────────────────────────────────────────
  const shortUrl = shareUrl.replace(/^https?:\/\//, '').slice(0, 60);
  ctx.font = '20px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = 'rgba(99,102,241,0.7)';
  ctx.textAlign = 'right';
  ctx.fillText(shortUrl, W - 56, H - 32);

  // Divider line above URL
  ctx.beginPath();
  ctx.moveTo(56, H - 56); ctx.lineTo(W - 56, H - 56);
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  ctx.stroke();

  return canvas.toDataURL('image/png');
}
