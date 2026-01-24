import { Inject, Injectable } from "@nestjs/common";
import { CreateCategoryInput } from "./dto/create-category.input";
import { UpdateCategoryInput } from "./dto/update-category.input";
import { type ICategoriesRepository } from "./interfaces/categories.repository";
import { TYPES } from "./constants/di";

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(TYPES.CategoriesRepository)
    private readonly categoriesRepository: ICategoriesRepository,
  ) {}

  create(createCategoryInput: CreateCategoryInput) {
    return "This action adds a new category";
  }

  async findAll(userId: string) {
    // ユーザーに紐づいたカテゴリを取得する
    // 一件もなければデフォルトカテゴリを取得して返却する(ユーザーがどのカテゴリを紐づけるかを登録してもらう)
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
