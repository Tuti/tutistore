import { useGraphQL } from '@/graphql/use-gql';
import { createCartQueryDoc } from './query';
import { error } from 'console';
import { useCartStore } from './cartStore';

export function useCreateCart(cartID: string): void {
  const updateCartID = useCartStore((state) => state.updateCartID);
  const cartData = useGraphQL(createCartQueryDoc);

  while (cartData.isFetching) {
    //wait
    console.log(new Date());
  }

  updateCartID(cartData.data?.cartCreate?.cart?.id as string);
}
