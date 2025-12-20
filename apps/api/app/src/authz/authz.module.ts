import { Module, SetMetadata } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { HttpModule } from '@nestjs/axios';
import { APP_GUARD } from '@nestjs/core';
import { JwtStrategy } from './jwt.strategy';
import { GqlAuthGuard } from './gql-auth.guard';
import { Auth0Service } from './auth0.service';
import { TYPES } from './constants/di-token';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), HttpModule],
  providers: [
    JwtStrategy,
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
