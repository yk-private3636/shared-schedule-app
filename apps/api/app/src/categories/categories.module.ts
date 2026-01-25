import { Module } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoriesResolver } from "./categories.resolver";
import { UsersModule } from "@/users/users.module";
import { TYPES } from "./constants/di";
import { CategoriesRepository } from "./categories.repository";
import { SharedModule } from "@/shared/shared.module";

@Module({
  providers: [
    CategoriesResolver,
    CategoriesService,
    {
      provide: TYPES.CategoriesRepository,
      useClass: CategoriesRepository,
    },
  ],
  imports: [UsersModule, SharedModule],
})
export class CategoriesModule {}
