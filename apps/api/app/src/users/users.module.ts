import { HttpModule } from "@nestjs/axios";
import { forwardRef, Module } from "@nestjs/common";
import { AuthzModule } from "@/authz/authz.module";
import { TYPES } from "./constants/di";
import { UsersRepository } from "./users.repository";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";
import { SharedModule } from "@/shared/shared.module";

@Module({
  imports: [HttpModule, forwardRef(() => AuthzModule), SharedModule],
  exports: [UsersService, TYPES.UsersRepository],
  providers: [
    UsersResolver,
    UsersService,
    {
      provide: TYPES.UsersRepository,
      useClass: UsersRepository,
    },
  ],
})
export class UsersModule {}
