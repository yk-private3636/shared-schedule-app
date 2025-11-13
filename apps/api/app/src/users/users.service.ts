import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create.user.dto';
import { TYPES } from './types/di-token';
import { type IUsersRepository } from './interfaces/users.repository.interface';
import { PrismaClient } from '@prisma/client';
import { type IDatabaseClientService } from '@/shared/interfaces/database-client.service.interface';
import { UserDTO } from './dto/user.dto';
import { UserFactory } from './factories/user-entity.factory';

@Injectable()
export class UsersService {

  constructor(
    @Inject(TYPES.UsersRepository)
    private readonly users: IUsersRepository<PrismaClient>,
    @Inject(TYPES.DatabaseClientService)
    private readonly dbClient: IDatabaseClientService
  ) {}

  async create(d: CreateUserDTO): Promise<UserDTO> {

    const tx = this.dbClient.getWriteClient();

    const userEntity = UserFactory.toEntityFromCreateDTO(d);

    await this.users.createUser(userEntity, tx);

    return UserFactory.toDtoFromEntity(userEntity);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}