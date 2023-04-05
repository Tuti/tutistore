const endpoint = 'https://tutitechstore.myshopify.com/api/graphql';

import request from 'graphql-request';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export function useGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  return useQuery(
    [(document.definitions[0] as any).name.value, variables],
    async ({ queryKey }) =>
      request(endpoint, document, queryKey[1] ? queryKey[1] : undefined, {
        'X-Shopify-Storefront-Access-Token': 'dfad09dd39fe0c15a25c41b7ea00daf6',
      })
  );
}
