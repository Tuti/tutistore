import { graphql } from '@/graphql/generated/gql';

export const getShopNameQueryDoc = graphql(/* GraphQL*/ `
  query GetShopName {
    shop {
      name
    }
  }
`);

export const getProductCollectionQueryDoc = graphql(/* GraphQL */ `
  query GetProducts($amount: Int) {
    products(first: $amount) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`);

export const getCollectionByHandleQueryDoc = graphql(/* GraphQL */ `
  query GetCollection($handle: String!, $numProducts: Int!) {
    collectionByHandle(handle: $handle) {
      title
      id
      products(first: $numProducts) {
        edges {
          node {
            id
            title
            handle
            description
            vendor
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
`);
