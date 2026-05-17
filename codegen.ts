import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://127.0.0.1:54321/graphql/v1',
  documents: ['src/**/*.gql'],
  generates: {
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        folder: '__generated__',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    },
    'src/shared/model/types.ts': {
      plugins: ['typescript'],
    },
  },
  config: {
    scalars: {
      Datetime: 'string',
      Date: 'string',
      UUID: 'string',
      JSON: 'unknown',
    },
  },
};
export default config;
