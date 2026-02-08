import { CategoryDTO } from "../dto/category.dto";
import { CategoryGQL } from "../dto/gql.dto";

export class CategoryGQLFactory {
  static fromCategoriesDTO(
    ds: CategoryDTO[],
    isCustomized: boolean,
  ): CategoryGQL {
    const categories = ds.map((d) => ({
      id: d.getId(),
      name: d.getName(),
      userId: d.getUserId(),
      kind: d.getKind(),
      status: d.getStatus(),
    }));

    return {
      isCustomized: isCustomized,
      details: categories,
    };
  }
}
