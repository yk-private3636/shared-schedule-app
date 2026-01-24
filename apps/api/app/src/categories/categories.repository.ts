import { Category } from "./domain/entities/category.entitiy";
import { ICategoriesRepository } from "./interfaces/categories.repository";
import { DefaultCategoriesQuery } from "./types/query";

export class CategoriesRepository implements ICategoriesRepository {
  async findByUserId(userId: string): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }

  async findByDefault(): Promise<DefaultCategoriesQuery[]> {
    throw new Error("Method not implemented.");
  }
}
