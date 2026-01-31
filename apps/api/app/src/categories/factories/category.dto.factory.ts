import { DEFAULT_CATEGORY_PREFIX } from "../constants/prefix";
import { Category } from "../domain/entities/category.entity";
import { CategoryDTO } from "../dto/category.dto";
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
  ): CategoryDTO {
    return new CategoryDTO(
      `${DEFAULT_CATEGORY_PREFIX}${category.id}`,
      category.name,
      userId,
      "DEFAULT",
      category.status,
    );
  }
}
