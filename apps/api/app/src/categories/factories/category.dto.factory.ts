import { Category } from "../domain/entities/category.entitiy";
import { CategoryDTO } from "../dto/category.dto";
import { CategoryTemporalPrefix } from "../types/prefix";
import { DefaultCategoriesQuery } from "../types/query";

export class CategoryDTOFactory {
  static fromEntity(category: Category): CategoryDTO {
    return new CategoryDTO(
      category.getId(),
      category.getName(),
      category.getUserId(),
      category.getKind(),
      category.getStatus(),
    );
  }

  static fromDefaultCategoryQuery(
    category: DefaultCategoriesQuery,
    userId: string,
    prefix: CategoryTemporalPrefix,
  ): CategoryDTO {
    return new CategoryDTO(
      `${prefix}${category.id}`,
      category.name,
      userId,
      "DEFAULT",
      category.status,
    );
  }
}
