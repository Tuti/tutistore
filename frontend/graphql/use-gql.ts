import request from 'graphql-request';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export function useGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  enabled?: boolean,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  return useQuery({
    queryKey: [(document.definitions[0] as any).name.value, variables],
    queryFn: async ({ queryKey }) =>
      request(
        'https://tutitechstore.myshopify.com/api/2023-01/graphql.json',
        document,
        queryKey[1] ? queryKey[1] : undefined,
        {
          'X-Shopify-Storefront-Access-Token':
            'dfad09dd39fe0c15a25c41b7ea00daf6',
        }
      ),
    enabled: enabled,
  });
}

/*
return useQuery(
    [(document.definitions[0] as any).name.value, variables],
    async ({ queryKey }) =>
      request(
        'https://tutitechstore.myshopify.com/api/2023-01/graphql.json',
        document,
        queryKey[1] ? queryKey[1] : undefined,
        {
          'X-Shopify-Storefront-Access-Token':
            'dfad09dd39fe0c15a25c41b7ea00daf6',
        }
      )
  );
*/
