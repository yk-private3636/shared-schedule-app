import { CategoryDTO } from "../dto/category.dto";
import { CategoryGQL } from "../dto/gql.dto";

export class CategoryGQLFactory {
  static fromCategoriesDTO(ds: CategoryDTO[]): CategoryGQL[] {
    return ds.map((d) => ({
      id: d.getId(),
      name: d.getName(),
      userId: d.getUserId(),
      kind: d.getKind(),
      status: d.getStatus(),
    }));
  }
}
