import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { HttpModule } from '@nestjs/axios';
import { AuthzModule } from '@/authz/authz.module';
import { TYPES } from './types/di-token';
import { UsersRepository } from './users.repository';
import { PrismaClientService } from '@/shared/services/prisma.client.service';

@Module({
  imports: [
    HttpModule,
    AuthzModule
  ],
  providers: [
    UsersResolver,
    UsersService,
    {
      provide: TYPES.UsersRepository,
      useClass: UsersRepository
    },
    {
      provide: TYPES.DatabaseClientService,
      useClass: PrismaClientService
    }
  ],
})
export class UsersModule {}
