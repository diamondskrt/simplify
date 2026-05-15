import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://127.0.0.1:54321/graphql/v1',
  documents: ['src/**/*.gql'],
  generates: {
    /**
     * GLOBAL SCHEMA TYPES
     */
    'src/shared/types/graphql.ts': {
      plugins: ['typescript'],
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        skipTypename: false,
        scalars: {
          UUID: 'string',
          JSON: 'Record<string, unknown>',
          Datetime: 'string',
        },
      },
    },
    /**
     * LOCAL GENERATED FILES
     */
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        folder: '__generated__',
        baseTypesPath: 'shared/types/graphql.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        useTypeImports: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        dedupeFragments: true,
        reactApolloVersion: 3,
        skipTypename: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
