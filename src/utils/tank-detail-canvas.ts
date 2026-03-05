/**
 * tank-detail-canvas.ts
 * Generates a 1200×630 OG-style share image for real (tracked) tanks.
 * Distinct from tank-preview-canvas.ts (builder / plan) – focuses on
 * actual measured water parameters, color-coded health status, and inhabitants.
 * Intent: help-seeking posts on Reddit / forums ("Here are my exact values").
 */

import { Tank } from '../types/tank';

const W = 1200;
const H = 630;

type StatusColor = '#10b981' | '#f59e0b' | '#ef4444' | '#94a3b8';

interface ParamCard {
  label: string;
  value: string;
  status: StatusColor;
  statusLabel: string;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) {
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

function paramStatus(label: string, val: number): { color: StatusColor; text: string } {
  switch (label) {
    case 'Ammonia':
      return val === 0 ? { color: '#10b981', text: 'Safe' } :
             val <= 0.25 ? { color: '#f59e0b', text: 'Caution' } :
             { color: '#ef4444', text: 'Danger' };
    case 'Nitrite':
      return val === 0 ? { color: '#10b981', text: 'Safe' } :
             val <= 0.5  ? { color: '#f59e0b', text: 'Caution' } :
             { color: '#ef4444', text: 'Danger' };
    case 'Nitrate':
      return val <= 10 ? { color: '#10b981', text: 'Good' } :
             val <= 20 ? { color: '#f59e0b', text: 'Elevated' } :
             { color: '#ef4444', text: 'High' };
    case 'pH':
      return val >= 6.5 && val <= 7.5 ? { color: '#10b981', text: 'Good' } :
             val >= 6.0 && val <= 8.0 ? { color: '#f59e0b', text: 'Off-range' } :
             { color: '#ef4444', text: 'Critical' };
    case 'Temp':
      return val >= 22 && val <= 28 ? { color: '#10b981', text: 'Good' } :
             val >= 18 && val <= 30 ? { color: '#f59e0b', text: 'Marginal' } :
             { color: '#ef4444', text: 'Critical' };
    default:
      return { color: '#94a3b8', text: 'Info' };
  }
}

export async function generateTankDetailImage(tank: Tank): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // ─── Background ────────────────────────────────────────────────────────────
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0,   '#0f172a'); // slate-900
  bg.addColorStop(0.6, '#0d1525');
  bg.addColorStop(1,   '#050d1a');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Subtle teal bokeh (different mood from builder's indigo)
  const bokehData: [number, number, number, string][] = [
    [1050,  60, 180, 'rgba(20,184,166,0.12)'],
    [900,  500, 140, 'rgba(6,182,212,0.09)'],
    [100,  400, 110, 'rgba(20,184,166,0.07)'],
    [300,   80, 100, 'rgba(6,182,212,0.06)'],
    [650,  580, 160, 'rgba(20,184,166,0.05)'],
  ];
  bokehData.forEach(([bx, by, br, bc]) => {
    const g = ctx.createRadialGradient(bx, by, 0, bx, by, br);
    g.addColorStop(0, bc);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(bx, by, br, 0, Math.PI * 2); ctx.fill();
  });

  // Bottom wave
  const wave = ctx.createLinearGradient(0, H - 90, 0, H);
  wave.addColorStop(0, 'rgba(20,184,166,0.06)');
  wave.addColorStop(1, 'rgba(6,182,212,0.18)');
  ctx.fillStyle = wave;
  ctx.beginPath();
  ctx.moveTo(0, H - 60);
  ctx.bezierCurveTo(280, H - 95, 580, H - 35, 880, H - 75);
  ctx.bezierCurveTo(1040, H - 95, 1140, H - 50, W, H - 60);
  ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath(); ctx.fill();

  // ─── Logo badge ──────────────────────────────────────────────────────────────
  const logoGrad = ctx.createLinearGradient(52, 40, 96, 84);
  logoGrad.addColorStop(0, '#14b8a6'); // teal
  logoGrad.addColorStop(1, '#06b6d4'); // cyan
  roundRect(ctx, 52, 40, 44, 44, 12);
  ctx.fillStyle = logoGrad;
  ctx.fill();
  ctx.font = 'bold 26px sans-serif';
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.fillText('A', 74, 72);

  ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.textAlign = 'left';
  ctx.fillText('AquaGuide', 108, 69);

  // "My Tank" label top-right
  roundRect(ctx, W - 200, 36, 148, 36, 18);
  ctx.fillStyle = 'rgba(20,184,166,0.18)';
  ctx.fill();
  roundRect(ctx, W - 200, 36, 148, 36, 18);
  ctx.strokeStyle = 'rgba(20,184,166,0.4)';
  ctx.lineWidth = 1.5; ctx.stroke();
  ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = '#5eead4';
  ctx.textAlign = 'center';
  ctx.fillText('My Tank', W - 126, 59);

  // ─── Tank name + sub-line ───────────────────────────────────────────────────
  const nameGrad = ctx.createLinearGradient(0, 100, W * 0.7, 170);
  nameGrad.addColorStop(0, '#ffffff');
  nameGrad.addColorStop(1, '#99f6e4');
  ctx.font = 'bold 64px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = nameGrad;
  ctx.textAlign = 'left';
  const displayName = tank.name.length > 28 ? tank.name.slice(0, 28) + '\u2026' : tank.name;
  ctx.fillText(displayName, 56, 160);

  const totalFish   = (tank.inhabitants?.fish   || []).reduce((s, f) => s + f.quantity, 0);
  const totalPlants = (tank.inhabitants?.plants || []).reduce((s, p) => s + p.quantity, 0);
  const fishSpecies = new Set((tank.inhabitants?.fish || []).map(f => f.speciesId)).size;
  const tankType    = tank.type ? tank.type.charAt(0).toUpperCase() + tank.type.slice(1) : 'Freshwater';

  const subDots: [string, string][] = [
    ['#14b8a6', `${tank.volumeLiters}L`],
    ['#06b6d4', `${tankType}`],
    ['#6366f1', `${totalFish} fish (${fishSpecies} sp.)`],
    ['#10b981', `${totalPlants} plants`],
  ];
  let dotX = 56;
  ctx.font = '22px -apple-system, BlinkMacSystemFont, sans-serif';
  subDots.forEach(([color, label]) => {
    ctx.beginPath(); ctx.arc(dotX + 7, 192, 7, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'left';
    ctx.fillText(label, dotX + 20, 200);
    dotX += ctx.measureText(label).width + 48;
  });

  // ─── WATER PARAMETERS section ─────────────────────────────────────────────
  ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = 'rgba(148,163,184,0.6)';
  ctx.textAlign = 'left';
  ctx.fillText('WATER PARAMETERS', 56, 238);

  // Build param cards from the tank's actual values
  const p = tank.parameters;
  const rawCards: Array<{ label: string; rawVal: number; display: string }> = [
    { label: 'pH',      rawVal: p.ph,      display: String(p.ph) },
    { label: 'Temp',    rawVal: p.tempC,   display: `${p.tempC}\u00b0C` },
    { label: 'Ammonia', rawVal: p.ammonia, display: `${p.ammonia} ppm` },
    { label: 'Nitrite', rawVal: p.nitrite, display: `${p.nitrite} ppm` },
    { label: 'Nitrate', rawVal: p.nitrate, display: `${p.nitrate} ppm` },
    ...(p.gh   ? [{ label: 'GH',      rawVal: p.gh,   display: `${p.gh}\u00b0dGH` }]   : []),
    ...(p.kh   ? [{ label: 'KH',      rawVal: p.kh,   display: `${p.kh}\u00b0dKH` }]   : []),
    ...(p.tds  ? [{ label: 'TDS',     rawVal: p.tds,  display: `${p.tds} ppm` }]        : []),
  ];

  const cards: ParamCard[] = rawCards.map(c => {
    const { color, text } = paramStatus(c.label, c.rawVal);
    return { label: c.label, value: c.display, status: color, statusLabel: text };
  });

  // Up to 5 cards fit in one row
  const MAX_CARDS = Math.min(cards.length, 6);
  const cardW   = Math.min(190, (W - 112 - (MAX_CARDS - 1) * 16) / MAX_CARDS);
  const cardH   = 120;
  const cardY   = 250;
  let   cx      = 56;

  cards.slice(0, MAX_CARDS).forEach(card => {
    // Card bg
    roundRect(ctx, cx, cardY, cardW, cardH, 14);
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.fill();
    roundRect(ctx, cx, cardY, cardW, cardH, 14);
    ctx.strokeStyle = `${card.status}55`;
    ctx.lineWidth = 1.5; ctx.stroke();

    // Status dot + label
    ctx.beginPath(); ctx.arc(cx + 16, cardY + 22, 6, 0, Math.PI * 2);
    ctx.fillStyle = card.status; ctx.fill();
    ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'left';
    ctx.fillText(card.label, cx + 28, cardY + 27);

    // Value (big)
    ctx.font = `bold 34px -apple-system, BlinkMacSystemFont, sans-serif`;
    ctx.fillStyle = '#f1f5f9';
    ctx.fillText(card.value, cx + 14, cardY + 76);

    // Status pill
    const sw = ctx.measureText(card.statusLabel).width + 18;
    roundRect(ctx, cx + 14, cardY + 88, sw, 22, 11);
    ctx.fillStyle = `${card.status}22`; ctx.fill();
    ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = card.status;
    ctx.textAlign = 'left';
    ctx.fillText(card.statusLabel, cx + 23, cardY + 103);

    cx += cardW + 16;
  });

  // If more than 6 params, draw second row (GH, KH, TDS, Salinity)
  if (cards.length > 6) {
    const extra = cards.slice(6);
    cx = 56;
    const row2Y = cardY + cardH + 12;
    extra.forEach(card => {
      roundRect(ctx, cx, row2Y, cardW, cardH, 14);
      ctx.fillStyle = 'rgba(255,255,255,0.05)'; ctx.fill();
      roundRect(ctx, cx, row2Y, cardW, cardH, 14);
      ctx.strokeStyle = `${card.status}55`; ctx.lineWidth = 1.5; ctx.stroke();

      ctx.beginPath(); ctx.arc(cx + 16, row2Y + 22, 6, 0, Math.PI * 2);
      ctx.fillStyle = card.status; ctx.fill();
      ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillStyle = '#94a3b8'; ctx.textAlign = 'left';
      ctx.fillText(card.label, cx + 28, row2Y + 27);

      ctx.font = `bold 34px -apple-system, BlinkMacSystemFont, sans-serif`;
      ctx.fillStyle = '#f1f5f9';
      ctx.fillText(card.value, cx + 14, row2Y + 76);

      const sw = ctx.measureText(card.statusLabel).width + 18;
      roundRect(ctx, cx + 14, row2Y + 88, sw, 22, 11);
      ctx.fillStyle = `${card.status}22`; ctx.fill();
      ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillStyle = card.status;
      ctx.fillText(card.statusLabel, cx + 23, row2Y + 103);

      cx += cardW + 16;
    });
  }

  // ─── INHABITANTS ────────────────────────────────────────────────────────────
  const inhY = cards.length > 6 ? cardY + cardH * 2 + 32 : cardY + cardH + 24;
  if (inhY < H - 80) {
    ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = 'rgba(148,163,184,0.6)';
    ctx.textAlign = 'left';
    ctx.fillText('INHABITANTS', 56, inhY);

    const FISH_COLORS = ['#6366f1','#14b8a6','#06b6d4','#10b981','#f59e0b','#ec4899','#8b5cf6','#f97316'];
    let tagX = 56;
    const tagY2 = inhY + 14;
    const allInhabitants = [
      ...(tank.inhabitants?.fish   || []).map(i => ({ name: i.speciesName, count: i.quantity, type: 'fish' })),
      ...(tank.inhabitants?.plants || []).map(i => ({ name: i.speciesName, count: i.quantity, type: 'plant' })),
    ];

    allInhabitants.slice(0, 8).forEach((inh, idx) => {
      const label = `${inh.count}× ${inh.name.length > 16 ? inh.name.slice(0, 16) + '\u2026' : inh.name}`;
      const color = inh.type === 'plant' ? '#10b981' : FISH_COLORS[idx % FISH_COLORS.length];
      ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
      const tw = ctx.measureText(label).width + 36;

      if (tagX + tw > W - 56) return;

      roundRect(ctx, tagX, tagY2, tw, 34, 17);
      ctx.fillStyle = color + '22'; ctx.fill();
      roundRect(ctx, tagX, tagY2, tw, 34, 17);
      ctx.strokeStyle = color + '55'; ctx.lineWidth = 1.5; ctx.stroke();

      // emoji
      ctx.font = '15px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(inh.type === 'plant' ? '\uD83C\uDF3F' : '\uD83D\uDC1F', tagX + 16, tagY2 + 22);

      ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillStyle = '#e2e8f0';
      ctx.textAlign = 'left';
      ctx.fillText(label, tagX + 28, tagY2 + 23);

      tagX += tw + 10;
    });

    if (allInhabitants.length > 8) {
      ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillStyle = '#64748b'; ctx.textAlign = 'left';
      ctx.fillText(`+${allInhabitants.length - 8} more`, tagX + 4, tagY2 + 23);
    }
  }

  // ─── Bottom: URL watermark ───────────────────────────────────────────────────
  const publicUrl = tank.publicSlug
    ? `aquaguide.app/tanks/${tank.publicSlug}`
    : 'aquaguide.app';

  ctx.beginPath();
  ctx.moveTo(56, H - 50); ctx.lineTo(W - 56, H - 50);
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1; ctx.stroke();

  ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = 'rgba(20,184,166,0.65)';
  ctx.textAlign = 'right';
  ctx.fillText(publicUrl, W - 56, H - 26);

  ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = 'rgba(148,163,184,0.35)';
  ctx.textAlign = 'left';
  ctx.fillText('Track your aquarium with AquaGuide', 56, H - 26);

  return canvas.toDataURL('image/png');
}

/**
 * Generates a Reddit / forum-friendly plain-text representation of the tank.
 */
export function generateTankTextSummary(tank: Tank): string {
  const p = tank.parameters;
  const totalFish   = (tank.inhabitants?.fish   || []).reduce((s, f) => s + f.quantity, 0);
  const totalPlants = (tank.inhabitants?.plants || []).reduce((s, p2) => s + p2.quantity, 0);

  const lines: string[] = [
    `**${tank.name}** – ${tank.volumeLiters}L ${tank.type ?? 'Freshwater'}`,
    '',
    '**Water Parameters**',
    `pH: ${p.ph} | Temp: ${p.tempC}°C | Ammonia: ${p.ammonia} ppm | Nitrite: ${p.nitrite} ppm | Nitrate: ${p.nitrate} ppm`,
    ...(p.gh   ? [`GH: ${p.gh}°dGH`]      : []),
    ...(p.kh   ? [`KH: ${p.kh}°dKH`]      : []),
    ...(p.tds  ? [`TDS: ${p.tds} ppm`]     : []),
    '',
    `**Inhabitants** (${totalFish} fish, ${totalPlants} plants)`,
    ...(tank.inhabitants?.fish   || []).map(f => `- ${f.quantity}× ${f.speciesName}`),
    ...(tank.inhabitants?.plants || []).map(p2 => `- ${p2.quantity}× ${p2.speciesName}`),
    '',
    tank.publicSlug
      ? `Tank profile: ${window.location.origin}/tanks/${tank.publicSlug}`
      : 'Tracked with AquaGuide – aquaguide.app',
  ];
  return lines.join('\n');
}
