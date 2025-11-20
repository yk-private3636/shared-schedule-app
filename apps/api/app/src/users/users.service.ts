import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create.user.dto';
import { TYPES } from './types/di-token';
import { type IUsersRepository } from './interfaces/users.repository.interface';
import { type IDatabaseClientService } from '@/shared/interfaces/database-client.service.interface';
import { UserDTO } from './dto/user.dto';
import { UserFactory } from './factories/user-entity.factory';

@Injectable()
export class UsersService {

  constructor(
    @Inject(TYPES.UsersRepository)
    private readonly users: IUsersRepository,
    @Inject(TYPES.DatabaseClientService)
    private readonly dbClient: IDatabaseClientService
  ) {}

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async create(d: CreateUserDTO): Promise<UserDTO> {

    const userEntity = UserFactory.toEntityFromCreateDTO(d);

    this.dbClient.writer(async (c) => {
      await this.users.create(userEntity, c);
    });

    return UserFactory.toDtoFromEntity(userEntity);
  }
}