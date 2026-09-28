/**
 * Centralised asset resolver.
 *
 * Drop images into `src/assets/images/<folder>/<name>.(webp|jpg|jpeg|png|avif)`
 * and reference them in data files by key, e.g. `products/celeste-ring`.
 * Missing files simply resolve to `undefined`, and <SmartImage> renders an
 * elegant placeholder — a missing asset can never break the build or the UI.
 */

const imageModules = import.meta.glob<string>(
  '/src/assets/images/**/*.{webp,jpg,jpeg,png,avif}',
  { eager: true, import: 'default' },
);

const videoModules = import.meta.glob<string>('/src/assets/videos/*.{mp4,webm}', {
  eager: true,
  import: 'default',
});

const IMAGE_EXTS = ['webp', 'avif', 'jpg', 'jpeg', 'png'] as const;

export function resolveImage(key?: string): string | undefined {
  if (!key) return undefined;
  for (const ext of IMAGE_EXTS) {
    const hit = imageModules[`/src/assets/images/${key}.${ext}`];
    if (hit) return hit;
  }
  return undefined;
}

export function resolveVideo(name: string): { mp4?: string; webm?: string } {
  return {
    mp4: videoModules[`/src/assets/videos/${name}.mp4`],
    webm: videoModules[`/src/assets/videos/${name}.webm`],
  };
}
