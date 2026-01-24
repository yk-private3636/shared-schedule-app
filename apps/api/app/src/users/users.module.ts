import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AuthzModule } from "@/authz/authz.module";
import { PrismaClientService } from "@/shared/services/database-client.service";
import { TYPES } from "./constants/di";
import { UsersRepository } from "./users.repository";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
  imports: [HttpModule, AuthzModule],
  exports: [
    UsersService,
    {
      provide: TYPES.UsersRepository,
      useClass: UsersRepository,
    },
  ],
  providers: [
    UsersResolver,
    UsersService,
    {
      provide: TYPES.UsersRepository,
      useClass: UsersRepository,
    },
    {
      provide: TYPES.DatabaseClientService,
      useClass: PrismaClientService,
    },
  ],
})
export class UsersModule {}
