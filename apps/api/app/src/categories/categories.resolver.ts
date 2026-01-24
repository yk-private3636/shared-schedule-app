import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CategoriesService } from "./categories.service";
import { CreateCategoryInput } from "./dto/create-category.input";
import { UpdateCategoryInput } from "./dto/update-category.input";
import { CategoryGQL } from "./types/gql";
import { Sub } from "@/authz/decorators/data";
import { UsersService } from "@/users/users.service";
import { BadRequestException } from "@nestjs/common";

@Resolver(() => CategoryGQL)
export class CategoriesResolver {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => CategoryGQL)
  createCategory(
    @Args("createCategoryInput") createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => [CategoryGQL], { name: "categories" })
  async findAll(@Sub() sub: string): Promise<CategoryGQL[]> {
    try {
      const user = await this.usersService.findOneBySub(sub);

      if (user === null) {
        throw new BadRequestException("User not found");
      }

      const categories = this.categoriesService.findAll(user.getId());
    } catch {}

    return [];
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
