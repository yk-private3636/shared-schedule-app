import { Inject, Injectable } from "@nestjs/common";
import { CreateCategoryInput } from "./dto/create-category.input";
import { UpdateCategoryInput } from "./dto/update-category.input";
import { type ICategoriesRepository } from "./interfaces/categories.repository";
import { TYPES } from "./constants/di";
import { TYPES as sharedTYPES } from "@/shared/constants/di";
import { type IDatabaseClientService } from "@/shared/interfaces/database-client.service";
import { CategoryDTO } from "./dto/category.dto";
import { CategoryDTOFactory } from "./factories/category.dto.factory";

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(TYPES.CategoriesRepository)
    private readonly categories: ICategoriesRepository,
    @Inject(sharedTYPES.DatabaseClientService)
    private readonly dbClient: IDatabaseClientService,
  ) {}

  create(createCategoryInput: CreateCategoryInput) {
    return "This action adds a new category";
  }

  async findAll(userId: string) {
    const categories = await this.dbClient.reader(
      async (tx): Promise<CategoryDTO[]> => {
        const userCategories = await this.categories.findByUserId(userId, tx);

        if (userCategories.length >= 1) {
          return userCategories
            .filter((c) => c.isActive() || c.isInactive())
            .map((c) => CategoryDTOFactory.fromEntity(c));
        }

        const defaultCategories = await this.categories.findByDefault(tx);

        return defaultCategories.map((c) =>
          CategoryDTOFactory.fromDefaultCategoryQuery(c, userId),
        );
      },
    );

    return categories;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
