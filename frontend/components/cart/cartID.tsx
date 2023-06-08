import { useGraphQL } from '@/graphql/use-gql';
import { createCartMutationDoc } from '@/graphql/mutations';
import { getLocalStorageItem } from '@/utils/localStorage';
import { useEffect } from 'react';

export default function CartID() {
  const CART = useGraphQL(
    createCartMutationDoc,
    getLocalStorageItem('shopify-cart-id') === null
  );

  if (
    CART !== null &&
    getLocalStorageItem('shopify-cart-id') === null &&
    typeof window !== 'undefined'
  ) {
    localStorage.setItem(
      'shopify-cart-id',
      CART.data?.cartCreate?.cart?.id as string
    );
  }

  return <></>;
}
