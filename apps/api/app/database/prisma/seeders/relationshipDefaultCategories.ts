import { PrismaClient } from "@prisma/client";

export async function execute(c: PrismaClient) {
  await c.relationshipDefaultCategory.deleteMany();

  await c.relationshipDefaultCategory.createMany({
    data: [
      {
        name: "家族",
        status: "ACTIVE",
      },
      {
        name: "友人",
        status: "ACTIVE",
      },
      {
        name: "恋人",
        status: "ACTIVE",
      },
      {
        name: "会社",
        status: "ACTIVE",
      },
      {
        name: "学校",
        status: "ACTIVE",
      },
      {
        name: "その他",
        status: "ACTIVE",
      },
    ],
  });
}
