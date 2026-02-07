import { generateUUID, isValidUUID } from "@/shared/helpers/uuid";
import { Category } from "../domain/entities/category.entity";
import { CategoryDTO } from "../dto/category.dto";
import { DEFAULT_CATEGORY_PREFIX } from "../constants/prefix";
import { InvalidArgmentError } from "@/shared/errors/InvalidArgmentError";

export class CategoryEntityFactory {
  static fromCategoryDTO(dto: CategoryDTO): Category {
    if (isValidUUID(dto.getId())) {
      return new Category(
        dto.getId(),
        dto.getName(),
        dto.getUserId(),
        dto.getKind(),
        dto.getStatus(),
      );
    } else if (dto.getId().startsWith(DEFAULT_CATEGORY_PREFIX)) {
      return new Category(
        generateUUID(),
        dto.getName(),
        dto.getUserId(),
        dto.getKind(),
        dto.getStatus(),
      );
    } else {
      throw new InvalidArgmentError("Invalid Category ID");
    }
  }
}
