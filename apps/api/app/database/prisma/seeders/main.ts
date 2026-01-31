import { PrismaClient } from "@prisma/client";
import { execute as relationshipDefaultCategoriesSeeder } from "./relationshipDefaultCategories";

const prisma = new PrismaClient();

async function main() {
  await relationshipDefaultCategoriesSeeder(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
