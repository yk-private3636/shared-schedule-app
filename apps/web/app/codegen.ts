import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/shared/graphql/schema.gql",
  ignoreNoDocuments: true,
  overwrite: true,
  generates: {
    "src/types/graphql/": {
      preset: "client",
      documents: ["./src/**/*.{ts,tsx}"],
      plugins: [],
    },
    "src/types/graphql/type.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  },
};

export default config;
