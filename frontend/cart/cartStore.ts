import { Product } from '@/graphql/generated/graphql';
import { create } from 'zustand';

interface CartState {
  userCountry: string;
  userEmail: string;
  shoppingCart: Product[];
  addToCart: (product: Product) => void;
}
export const useCartStore = create<CartState>()((set) => ({
  userCountry: 'US',
  userEmail: 'test@example.com',
  shoppingCart: [],
  addToCart: (product) =>
    set((state) => ({ shoppingCart: [...state.shoppingCart, product] })),
}));
