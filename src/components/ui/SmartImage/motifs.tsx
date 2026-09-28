import type { ReactElement } from 'react';
import type { Motif } from '../../../data/types';

/** Point on a quadratic Bézier curve. */
const q = (t: number, a: number, c: number, b: number) => (1 - t) ** 2 * a + 2 * t * (1 - t) * c + t ** 2 * b;

const beads = (count: number, from: number, to: number, p0: [number, number], c: [number, number], p1: [number, number]) =>
  Array.from({ length: count }, (_, i) => {
    const t = from + ((to - from) * i) / (count - 1);
    return [q(t, p0[0], c[0], p1[0]), q(t, p0[1], c[1], p1[1])] as const;
  });

/** Thin line drawings (viewBox 0 0 120 120). Stroke colour is inherited. */
export const motifs: Record<Motif, () => ReactElement> = {
  ring: () => (
    <>
      <circle cx="60" cy="72" r="26" />
      <circle cx="60" cy="72" r="21.5" />
      <path d="M51 44 L56 36 H64 L69 44 L60 52 Z" />
      <path d="M51 44 H69 M56 36 L60 44 L64 36 M60 44 V52" />
    </>
  ),
  earring: () => (
    <>
      <circle cx="60" cy="26" r="4.5" />
      <path d="M60 30.5 V42" />
      <path d="M60 44 C47 62 45 78 60 92 C75 78 73 62 60 44 Z" />
      <path d="M60 56 C53 66 52 75 60 83 C68 75 67 66 60 56 Z" />
    </>
  ),
  pendant: () => (
    <>
      <path d="M24 16 Q60 84 96 16" />
      <circle cx="60" cy="54" r="3" />
      <circle cx="60" cy="72" r="14" />
      <path d="M60 62 L62.5 69.5 L70 72 L62.5 74.5 L60 82 L57.5 74.5 L50 72 L57.5 69.5 Z" />
    </>
  ),
  necklace: () => (
    <>
      <path d="M20 22 Q60 118 100 22" />
      {beads(11, 0.18, 0.82, [20, 22], [60, 118], [100, 22]).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y + 4} r={i === 5 ? 5 : 2.6} />
      ))}
    </>
  ),
  mangalsutra: () => (
    <>
      <path d="M22 18 Q60 108 98 18" />
      <path d="M28 18 Q60 98 92 18" />
      {beads(14, 0.12, 0.88, [22, 18], [60, 108], [98, 18]).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.8" fill="currentColor" />
      ))}
      <path d="M60 64 L68 74 L60 86 L52 74 Z" />
      <path d="M52 74 H68" />
    </>
  ),
  bracelet: () => (
    <>
      <ellipse cx="60" cy="62" rx="40" ry="17" />
      <ellipse cx="60" cy="62" rx="35" ry="13" />
      <circle cx="98" cy="58" r="3.5" />
      <path d="M40 76 l3 -2 M52 79 l3 -1 M66 79 l3 -1 M78 76 l3 -2" />
    </>
  ),
  bangle: () => (
    <>
      <ellipse cx="60" cy="46" rx="34" ry="12" />
      <ellipse cx="60" cy="60" rx="34" ry="12" />
      <ellipse cx="60" cy="74" rx="34" ry="12" />
    </>
  ),
  chain: () => (
    <>
      {Array.from({ length: 8 }, (_, i) =>
        i % 2 === 0 ? (
          <ellipse key={i} cx={18 + i * 12} cy={60} rx="9" ry="5.5" />
        ) : (
          <ellipse key={i} cx={18 + i * 12} cy={60} rx="9" ry="1.6" />
        ),
      )}
    </>
  ),
  spark: () => (
    <>
      <path d="M60 28 C62 52 68 58 92 60 C68 62 62 68 60 92 C58 68 52 62 28 60 C52 58 58 52 60 28 Z" />
      <circle cx="60" cy="60" r="36" strokeDasharray="1 5" />
    </>
  ),
  fold: () => (
    <>
      <path d="M60 22 L90 52 L60 98 L30 52 Z" />
      <path d="M30 52 L60 62 L90 52 M60 22 V62 M60 62 V98" />
    </>
  ),
  hands: () => (
    <>
      <path d="M46 112 V54 Q46 38 60 38 Q74 38 74 54 V112" />
      <ellipse cx="60" cy="76" rx="15" ry="4.5" />
      <path d="M56 70.5 L60 64 L64 70.5" />
    </>
  ),
};
