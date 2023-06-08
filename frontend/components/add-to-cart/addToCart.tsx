import { useGraphQL } from '@/graphql/use-gql';
import styles from './addToCart.module.css';
import { AddItemToCartMutationDoc } from '@/pages/products/mutation';
import { CartLineInput } from '@/graphql/generated/graphql';
import { useState } from 'react';

export function AddToCart() {
  let cartId = '';
  let lines: CartLineInput[] = [];

  const [activeRequest, setActiveRequest] = useState(false);

  const itemAdded = useGraphQL(AddItemToCartMutationDoc, activeRequest, {
    cartID: cartId,
    lines: lines,
  });

  function handleAddToCart() {
    setActiveRequest(true);
  }

  return (
    <button className={styles['add-to-cart-button']} onClick={handleAddToCart}>
      {'ADD TO CART'}
    </button>
  );
}
