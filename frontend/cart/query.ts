import { create } from 'zustand';

interface CartState {
  userCountry: string;
  userEmail: string;
  items: number;
  increase: (by: number) => void;
}
export const useCartStore = create<CartState>()((set) => ({
  userCountry: 'US',
  userEmail: 'test@example.com',
  items: 0,
  increase: (by) => set((state) => ({ items: state.items + by })),
}));
