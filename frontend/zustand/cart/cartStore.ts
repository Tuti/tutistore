import { create } from 'zustand';

const MAX_QUANTITY = 3;

interface CartState {
  cartID: string;
  shoppingCart: Map<string, CartItem>;
  productTotalQuantities: Map<string, number>;
  updateCartID: (cartID: string) => void;
  addToCart: (
    productID: string,
    variantID: string
  ) => { success: boolean; error: Error };
  changeItemQuantity: (
    productID: string,
    variantID: string,
    quantity: number
  ) => { success: boolean; error: Error };
}

interface CartItem {
  variantID: string;
  productID: string;
  quantity: number;
}

export const useCartStore = create<CartState>()((set) => ({
  cartID: '',
  shoppingCart: new Map<string, CartItem>(),
  updateCartID(cartID) {
    set({ cartID: cartID });
  },
  addToCart(productID, variantID) {
    let cartItem = this.shoppingCart.get(variantID);
    if (typeof cartItem === undefined) {
      this.shoppingCart.set(variantID, {
        variantID: variantID,
        productID: productID,
        quantity: 1,
      });
      return { success: true, error: new Error(undefined) };
    }

    if (cartItem!.quantity < MAX_QUANTITY) {
      this.shoppingCart.set(productID, <CartItem>{
        productID: productID,
        variantID: variantID,
        quantity: cartItem!.quantity + 1,
      });
      return { success: true, error: new Error(undefined) };
    } else {
      return {
        success: false,
        error: new Error('Cannot add more than 3 of a single product'),
      };
    }
  },
  changeItemQuantity(productID, variantID, quantity) {
    const current_quantity = this.productTotalQuantities.get(
      productID
    ) as number;

    if (current_quantity > MAX_QUANTITY) {
      return {
        success: false,
        error: new Error('Cannot add more than 3 of a single product'),
      };
    }
  },
}));
