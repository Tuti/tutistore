import { graphql } from '@/graphql/generated';

export const createCartWithItemQueryDoc = graphql(/* graphQL */ `
  mutation cartCreate {
    cartCreate {
      cart {
        id
        createdAt
        updatedAt
      }
    }
  }
`);
