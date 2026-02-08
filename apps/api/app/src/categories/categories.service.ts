import { Inject, Injectable } from "@nestjs/common";
import { type ICategoriesRepository } from "./interfaces/categories.repository";
import { TYPES } from "./constants/di";
import { TYPES as sharedTYPES } from "@/shared/constants/di";
import { type IDatabaseClientService } from "@/shared/interfaces/database-client.service";
import { CategoryDTO } from "./dto/category.dto";
import { CategoryDTOFactory } from "./factories/category.dto.factory";
import { CategoryEntityFactory } from "./factories/category.entity.factory";

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(TYPES.CategoriesRepository)
    private readonly categories: ICategoriesRepository,
    @Inject(sharedTYPES.DatabaseClientService)
    private readonly dbClient: IDatabaseClientService,
  ) {}

  async isCustomized(userId: string): Promise<boolean> {
    const isCustomized = await this.dbClient.reader(
      async (tx): Promise<boolean> => {
        const categoriesExist = await this.categories.existsByUserId(
          userId,
          tx,
        );
        return categoriesExist;
      },
    );

    return isCustomized;
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

  async createMany(ds: CategoryDTO[]): Promise<CategoryDTO[]> {
    const categories = ds.map((d) => CategoryEntityFactory.fromCategoryDTO(d));

    await this.dbClient.writer(async (tx) => {
      await this.categories.createMany(categories, tx);
    });

    return categories.map((c) => CategoryDTOFactory.fromEntity(c));
  }
}
