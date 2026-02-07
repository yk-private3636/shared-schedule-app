import { PrismaClient } from "@prisma/client";
import { Category } from "./domain/entities/category.entity";
import { ICategoriesRepository } from "./interfaces/categories.repository";
import { DefaultCategoriesQuery } from "./types/query";

export class CategoriesRepository implements ICategoriesRepository {
  async findByUserId(userId: string, tx: PrismaClient): Promise<Category[]> {
    const result = await tx.relationshipCategory.findMany({
      where: {
        user_id: userId,
      },
    });

    return result.map(
      (r) => new Category(r.id, r.name, r.user_id, r.kind, r.status),
    );
  }

  async findByDefault(tx: PrismaClient): Promise<DefaultCategoriesQuery[]> {
    const result = await tx.relationshipDefaultCategory.findMany();

    return result.map((r) => ({ id: r.id, name: r.name, status: r.status }));
  }

  async createMany(categories: Category[], tx: PrismaClient): Promise<void> {
    const data = categories.map((c) => ({
      id: c.getId(),
      name: c.getName(),
      user_id: c.getUserId(),
      kind: c.getKind(),
      status: c.getStatus(),
    }));

    await tx.relationshipCategory.createMany({
      data,
    });
  }
}
