import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/shared/graphql/schema.gql",
  generates: {
    "src/types/graphql/": {
      preset: "client",
      documents: ["./src/**/*.{ts,tsx}"],
      plugins: ["typescript", "typescript-resolvers"],
    },
    "src/types/graphql/type.ts": {
      schema: "./src/shared/graphql/schema.gql",
      plugins: ["typescript", "typescript-resolvers"]
    }
  },
};

export default config;
