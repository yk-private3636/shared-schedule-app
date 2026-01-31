import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { PassportModule } from "@nestjs/passport";
import { Auth0Service } from "./auth0.service";
import { TYPES } from "./constants/di";
import { GqlAuthGuard } from "./gql-auth.guard";
import { PassportService } from "./passport.service";
import { SharedModule } from "@/shared/shared.module";
import { UsersModule } from "@/users/users.module";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    HttpModule,
    UsersModule,
    SharedModule,
  ],
  providers: [
    PassportService,
    {
      provide: APP_GUARD,
      useClass: GqlAuthGuard,
    },
    {
      provide: TYPES.IdpService,
      useClass: Auth0Service,
    },
    Auth0Service,
    String,
  ],
  exports: [PassportModule, Auth0Service, TYPES.IdpService],
})
export class AuthzModule {}
