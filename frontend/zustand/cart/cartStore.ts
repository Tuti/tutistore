import { create } from 'zustand';

interface CartState {
  cartID: string;
  updateCartID: (cartID: string) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cartID: '',
  updateCartID(cartID) {
    set({ cartID: cartID });
  },
}));
