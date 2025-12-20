import { Inject, Injectable } from '@nestjs/common';
import { SaveUserDTO } from './dto/save.user.dto';
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
    private readonly dbClient: IDatabaseClientService,
  ) {}

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  public async save(d: SaveUserDTO): Promise<UserDTO> {
    let userEntity = UserFactory.toEntityFromSaveDTO(d);

    userEntity = await this.dbClient.writer(async (c) => {
      const user = await this.users.findBySub(userEntity.getSub(), c);

      if (user === null) {
        await this.users.create(userEntity, c);
      } else {
        userEntity = UserFactory.toEntityFromSaveDTOWithId(
          userEntity,
          user.getId(),
        );
        await this.users.update(userEntity, c);
      }

      return userEntity;
    });

    return UserFactory.toDtoFromEntity(userEntity);
  }
}
