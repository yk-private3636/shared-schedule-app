import { Resolver, Query } from "@nestjs/graphql";
import { CategoriesService } from "./categories.service";
import { CategoryGQL } from "./types/gql";
import { UserId } from "@/authz/decorators/data";
import { CategoryGQLFactory } from "./factories/category.gql.factory";

@Resolver(() => CategoryGQL)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => [CategoryGQL], { name: "categories" })
  async findAll(@UserId() userId: string): Promise<CategoryGQL[]> {
    const categories = await this.categoriesService.findAll(userId);
    return CategoryGQLFactory.fromCategoriesDTO(categories);
  }

  @Query(() => Boolean, { name: "isCategoryCustomized" })
  async isCustomized(@UserId() userId: string): Promise<boolean> {
    return this.categoriesService.isCustomized(userId);
  }
}
