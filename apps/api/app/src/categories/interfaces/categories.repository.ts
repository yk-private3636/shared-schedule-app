import { Category } from "../domain/entities/category.entity";
import { DefaultCategoriesQuery } from "../types/query";

export interface ICategoriesRepository {
  findByUserId(userId: string, tx: unknown): Promise<Category[]>;
  findByDefault(tx: unknown): Promise<DefaultCategoriesQuery[]>;
}
