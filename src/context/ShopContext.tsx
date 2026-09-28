import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

interface ShopState {
  wishlist: ReadonlySet<string>;
  bagCount: number;
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
}

const ShopContext = createContext<ShopState | null>(null);

/** Minimal client-side shop state for V1 (wishlist + bag count). */
export function ShopProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<ReadonlySet<string>>(() => new Set());
  const [bagCount] = useState(0);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const isWishlisted = useCallback((id: string) => wishlist.has(id), [wishlist]);

  const value = useMemo(
    () => ({ wishlist, bagCount, toggleWishlist, isWishlisted }),
    [wishlist, bagCount, toggleWishlist, isWishlisted],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop(): ShopState {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used inside <ShopProvider>');
  return ctx;
}
