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

export const AddItemToCartMutationDoc = graphql(/* Graphql */ `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        totalQuantity
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
                __typename
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`);
