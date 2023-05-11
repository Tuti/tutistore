import { create } from 'zustand';

const MAX_QUANTITY = 3;

interface CartState {
  cartID: string;
  shoppingCart: Map<string, CartItem>;
  productTotalQuantities: Map<string, number>;
  updateCartID: (cartID: string) => void;
  addToCart: (
    productID: string,
    variantID: string,
    title: string
  ) => { success: boolean; error: Error };
  changeItemQuantity: (
    productID: string,
    quantity: number
  ) => { success: boolean; error: Error };
}

export interface CartItem {
  title: string;
  variantID: string;
  productID: string;
  quantity: number;
}

export const useCartStore = create<CartState>()((set, get) => ({
  cartID: '',
  shoppingCart: new Map<string, CartItem>(),
  productTotalQuantities: new Map<string, number>(),
  updateCartID(cartID) {
    set({ cartID: cartID });
  },
  addToCart(productID, variantID, title) {
    const variantExists = get().shoppingCart.has(variantID);
    if (!variantExists) {
      console.log('variant did not exist');
      get().shoppingCart.set(variantID, {
        productID: productID,
        variantID: variantID,
        title: title,
        quantity: 1,
      });
      return { success: true, error: new Error(undefined) };
    }

    const cartItem = get().shoppingCart.get(variantID);

    if (cartItem!.quantity < MAX_QUANTITY) {
      get().shoppingCart.set(productID, <CartItem>{
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
  changeItemQuantity(productID, quantity) {
    const current_quantity = this.productTotalQuantities.get(
      productID
    ) as number;

    if (current_quantity + quantity > MAX_QUANTITY) {
      return {
        success: true,
        error: new Error('Cannot add more than 3 of a single product'),
      };
    } else {
      this.productTotalQuantities.set(productID, 5);
    }
    return {
      success: false,
      error: new Error('error'),
    };
  },
}));
