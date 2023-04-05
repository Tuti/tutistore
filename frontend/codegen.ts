import { CodegenConfig } from '@graphql-codegen/cli';
const endpoint = 'https://tutitechstore.myshopify.com/api/2023-01/graphql.json';

const name ='X-Shopify-Storefront-Access-Token';
const token = 'dfad09dd39fe0c15a25c41b7ea00daf6'


const config: CodegenConfig = {
  schema: [endpoint: {
    headers: {
      [name, 'dfad09dd39fe0c15a25c41b7ea00daf6']
    }
  }],

  documents: ['graphQL/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './graphQL/generated/': {
      preset: 'client',
    },
  },
};

export default config;
