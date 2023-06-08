import { graphql } from '@/graphql/generated';

export const createCartMutationDoc = graphql(/* Graphql */ `
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
