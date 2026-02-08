import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CategoriesService } from "./categories.service";
import { UserId } from "@/authz/decorators/data";
import { CategoryGQLFactory } from "./factories/category.gql.factory";
import { CategoryDTOFactory } from "./factories/category.dto.factory";
import { CategoryGQL, CreateCategoriesInput } from "./dto/gql.dto";

@Resolver(() => CategoryGQL)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => CategoryGQL, { name: "categories" })
  async findAll(@UserId() userId: string): Promise<CategoryGQL> {
    const categories = await this.categoriesService.findAll(userId);
    const isCustomized = await this.categoriesService.isCustomized(userId);
    return CategoryGQLFactory.fromCategoriesDTO(categories, isCustomized);
  }

  @Mutation(() => CategoryGQL)
  async createCategories(
    @Args("createCategoriesInput") input: CreateCategoriesInput,
    @UserId() userId: string,
  ): Promise<CategoryGQL> {
    const dto = CategoryDTOFactory.fromCreateCategoriesMutation(
      userId,
      input.categories,
    );
    const categories = await this.categoriesService.createMany(dto);
    return CategoryGQLFactory.fromCategoriesDTO(categories, true);
  }
}
