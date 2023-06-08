/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetShopName {\n    shop {\n      name\n    }\n  }\n": types.GetShopNameDocument,
    "\n  query GetProducts($amount: Int) {\n    products(first: $amount) {\n      edges {\n        node {\n          id\n          title\n          handle\n          description\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n            maxVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query GetCollection($handle: String!, $numProducts: Int!) {\n    collectionByHandle(handle: $handle) {\n      title\n      id\n      products(first: $numProducts) {\n        edges {\n          node {\n            id\n            title\n            handle\n            description\n            vendor\n            priceRange {\n              minVariantPrice {\n                amount\n                currencyCode\n              }\n            }\n            images(first: 5) {\n              edges {\n                node {\n                  url\n                  altText\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetCollectionDocument,
    "\n  mutation cartCreate {\n    cartCreate {\n      cart {\n        id\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.CartCreateDocument,
    "\n  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        id\n        totalQuantity\n        lines(first: 10) {\n          edges {\n            node {\n              id\n              merchandise {\n                __typename\n              }\n            }\n          }\n        }\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": types.CartLinesAddDocument,
    "\n  query GetProductDataByHandle($productHandle: String!) {\n    product(handle: $productHandle) {\n      id\n      title\n      description\n      handle\n      productType\n      priceRange {\n        minVariantPrice {\n          amount\n        }\n        maxVariantPrice {\n          amount\n        }\n      }\n      vendor\n      tags\n      images(first: 10) {\n        edges {\n          node {\n            url\n            altText\n          }\n        }\n      }\n      variants(first: 10) {\n        edges {\n          node {\n            id\n            title\n            availableForSale\n          }\n        }\n      }\n    }\n  }\n": types.GetProductDataByHandleDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetShopName {\n    shop {\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetShopName {\n    shop {\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProducts($amount: Int) {\n    products(first: $amount) {\n      edges {\n        node {\n          id\n          title\n          handle\n          description\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n            maxVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts($amount: Int) {\n    products(first: $amount) {\n      edges {\n        node {\n          id\n          title\n          handle\n          description\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n            maxVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCollection($handle: String!, $numProducts: Int!) {\n    collectionByHandle(handle: $handle) {\n      title\n      id\n      products(first: $numProducts) {\n        edges {\n          node {\n            id\n            title\n            handle\n            description\n            vendor\n            priceRange {\n              minVariantPrice {\n                amount\n                currencyCode\n              }\n            }\n            images(first: 5) {\n              edges {\n                node {\n                  url\n                  altText\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCollection($handle: String!, $numProducts: Int!) {\n    collectionByHandle(handle: $handle) {\n      title\n      id\n      products(first: $numProducts) {\n        edges {\n          node {\n            id\n            title\n            handle\n            description\n            vendor\n            priceRange {\n              minVariantPrice {\n                amount\n                currencyCode\n              }\n            }\n            images(first: 5) {\n              edges {\n                node {\n                  url\n                  altText\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation cartCreate {\n    cartCreate {\n      cart {\n        id\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation cartCreate {\n    cartCreate {\n      cart {\n        id\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        id\n        totalQuantity\n        lines(first: 10) {\n          edges {\n            node {\n              id\n              merchandise {\n                __typename\n              }\n            }\n          }\n        }\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        id\n        totalQuantity\n        lines(first: 10) {\n          edges {\n            node {\n              id\n              merchandise {\n                __typename\n              }\n            }\n          }\n        }\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProductDataByHandle($productHandle: String!) {\n    product(handle: $productHandle) {\n      id\n      title\n      description\n      handle\n      productType\n      priceRange {\n        minVariantPrice {\n          amount\n        }\n        maxVariantPrice {\n          amount\n        }\n      }\n      vendor\n      tags\n      images(first: 10) {\n        edges {\n          node {\n            url\n            altText\n          }\n        }\n      }\n      variants(first: 10) {\n        edges {\n          node {\n            id\n            title\n            availableForSale\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProductDataByHandle($productHandle: String!) {\n    product(handle: $productHandle) {\n      id\n      title\n      description\n      handle\n      productType\n      priceRange {\n        minVariantPrice {\n          amount\n        }\n        maxVariantPrice {\n          amount\n        }\n      }\n      vendor\n      tags\n      images(first: 10) {\n        edges {\n          node {\n            url\n            altText\n          }\n        }\n      }\n      variants(first: 10) {\n        edges {\n          node {\n            id\n            title\n            availableForSale\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;