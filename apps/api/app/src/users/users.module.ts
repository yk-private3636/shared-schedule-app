import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AuthzModule } from "@/authz/authz.module";
import { PrismaClientService } from "@/shared/services/database-client.service";
import { TYPES } from "./types/di-token";
import { UsersRepository } from "./users.repository";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
  imports: [HttpModule, AuthzModule],
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
