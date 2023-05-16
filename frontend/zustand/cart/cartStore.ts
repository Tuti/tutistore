import { Cart } from '@/graphql/generated/graphql';
import { create } from 'zustand';

const MAX_QUANTITY = 3;

interface CartState {
  cartID: string;
  shoppingCart: Map<string, CartItem>;
  cartSize: number;
  productTotalQuantities: Map<string, number>;
  updateCartID: (cartID: string) => void;
  addToCart: (
    productID: string,
    variantID: string,
    title: string
  ) => { success: boolean; error: Error };
  updateProductQuantity: (
    productID: string,
    quantity: number
  ) => { success: boolean; error: Error };
  updateCartSize: () => void;
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
  cartSize: 0,
  updateCartID(cartID) {
    set({ cartID: cartID });
  },
  addToCart(productID, variantID, title) {
    const result = get().updateProductQuantity(productID, 1);
    if (result.success === false) {
      return result;
    }

    /* Variant does not exist so we create one */
    const variantExists = get().shoppingCart.has(variantID);
    if (!variantExists) {
      console.log('variant did not exist');
      get().shoppingCart.set(variantID, <CartItem>{
        productID: productID,
        variantID: variantID,
        title: title,
        quantity: 1,
      });
      get().updateCartSize();
      return { success: true, error: new Error(undefined) };
    }

    /* Variant already exists and we update it */
    const cartItem = get().shoppingCart.get(variantID);
    get().shoppingCart.set(variantID, <CartItem>{
      productID: productID,
      variantID: variantID,
      quantity: cartItem!.quantity + 1,
    });
    get().updateCartSize();
    return { success: true, error: new Error(undefined) };
  },
  updateProductQuantity(productID, quantity) {
    if (!get().productTotalQuantities.has(productID)) {
      get().productTotalQuantities.set(productID, quantity);
      return { success: true, error: new Error(undefined) };
    }

    const current_quantity = get().productTotalQuantities.get(
      productID
    ) as number;

    if (current_quantity + quantity <= MAX_QUANTITY) {
      get().productTotalQuantities.set(productID, current_quantity + quantity);
      return {
        success: true,
        error: new Error(undefined),
      };
    } else {
      return {
        success: false,
        error: new Error('Cannot add more than 3 of a single product'),
      };
    }
  },
  updateCartSize() {
    let size = 0;
    for (let value of get().shoppingCart.values()) {
      size += value.quantity;
    }
    set({ cartSize: size });
  },
}));
