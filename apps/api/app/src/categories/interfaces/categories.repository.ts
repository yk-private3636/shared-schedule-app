import { Category } from "../domain/entities/category.entitiy";
import { DefaultCategoriesQuery } from "../types/query";

export interface ICategoriesRepository {
  findByUserId(userId: string): Promise<Category[]>;
  findByDefault(): Promise<DefaultCategoriesQuery[]>;
}
