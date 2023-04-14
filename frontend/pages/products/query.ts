import { graphql } from '@/graphql/generated';

export const getProductDataByHandleQueryDoc = graphql(/*GraphQL*/ `
  query GetProductDataByHandle($productHandle: String!) {
    product(handle: $productHandle) {
      id
      title
      description
      handle
      productType
      priceRange {
        minVariantPrice {
          amount
        }
        maxVariantPrice {
          amount
        }
      }
      vendor
      tags
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            availableForSale
          }
        }
      }
    }
  }
`);
