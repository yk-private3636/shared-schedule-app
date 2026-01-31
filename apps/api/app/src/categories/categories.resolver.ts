import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CategoriesService } from "./categories.service";
import { CreateCategoryInput } from "./dto/create-category.input";
import { UpdateCategoryInput } from "./dto/update-category.input";
import { CategoryGQL } from "./types/gql";
import { UserId } from "@/authz/decorators/data";
import { CategoryGQLFactory } from "./factories/category.gql.factory";

@Resolver(() => CategoryGQL)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => CategoryGQL)
  createCategory(
    @Args("createCategoryInput") createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => [CategoryGQL], { name: "categories" })
  async findAll(@UserId() userId: string): Promise<CategoryGQL[]> {
    const categories = await this.categoriesService.findAll(userId);
    return CategoryGQLFactory.fromCategoriesDTO(categories);
  }

  @Query(() => CategoryGQL, { name: "category" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Mutation(() => CategoryGQL)
  updateCategory(
    @Args("updateCategoryInput") updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoriesService.update(
      updateCategoryInput.id,
      updateCategoryInput,
    );
  }

  @Mutation(() => CategoryGQL)
  removeCategory(@Args("id", { type: () => Int }) id: number) {
    return this.categoriesService.remove(id);
  }
}
