import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "./database/prisma/schema.prisma",
  migrations: {
    path: "./database/prisma/migrations",
    seed: "ts-node ./database/prisma/seeders/main.ts",
  },
});
