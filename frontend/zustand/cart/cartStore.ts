import { Cart, ProductVariant } from '@/graphql/generated/graphql';
import { create } from 'zustand';

const MAX_QUANTITY = 3;

interface CartState {
  cartID: string;
  cartSize: number;
  subtotal: number;
  userActiveCart: Map<string, CartItem>;
  productTotalQuantities: Map<string, number>;

  updateCartID: (cartID: string) => void;

  addToCart: (
    productID: string,
    variantID: string,
    name: string,
    price: number,
    imageUrl: string,
    altText: string,
    size: string
  ) => { success: boolean; error: Error };

  updateProductQuantity: (
    productID: string,
    quantity: number
  ) => { success: boolean; error: Error };

  updateCartSize: () => void;
  updateSubtotal: () => void;
}

export interface CartItem {
  size: string;
  variantID: string;
  productID: string;
  quantity: number;
}

export const useCartStore = create<CartState>()((set, get) => ({
  cartID: '',
  cartSize: 0,
  subtotal: 0,
  userActiveCart: new Map<string, CartItem>(),
  productTotalQuantities: new Map<string, number>(),

  updateCartID(cartID) {
    set({ cartID: cartID });
  },

  addToCart(productID, variantID, name, price, imageUrl, altText, size) {
    const result = get().updateProductQuantity(productID, 1);
    if (result.success === false) {
      return result;
    }

    /* Variant does not exist so we create one */
    const variantExists = get().userActiveCart.has(variantID);
    if (!variantExists) {
      get().userActiveCart.set(variantID, <CartItem>{
        productID: productID,
        variantID: variantID,
        name: name,
        size: size,
        price: price,
        imageUrl: imageUrl,
        altText: altText,
        quantity: 1,
      });
      get().updateSubtotal();
      get().updateCartSize();
      return { success: true, error: new Error(undefined) };
    }

    /* Variant already exists and we update it */
    const cartItem = get().userActiveCart.get(variantID);
    get().userActiveCart.set(variantID, <CartItem>{
      ...cartItem,
      quantity: cartItem!.quantity + 1,
    });
    get().updateSubtotal();
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
    for (let value of get().userActiveCart.values()) {
      size += value.quantity;
    }
    set({ cartSize: size });
  },

  updateSubtotal() {
    let subtotal: number = 0;
    for (let value of get().userActiveCart.values()) {
      subtotal = +subtotal + +value.price * value.quantity; // prepend with + to ensure they are typed correctly
    }
    set({ subtotal: subtotal });
  },
}));
