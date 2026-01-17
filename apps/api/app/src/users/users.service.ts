import { Inject, Injectable } from "@nestjs/common";
import type { IDatabaseClientService } from "@/shared/interfaces/database-client.service";
import type { SaveUserDTO } from "./dto/save.user.dto";
import type { UserDTO } from "./dto/user.dto";
import { UserFactory } from "./factories/user-entity.factory";
import type { IUsersRepository } from "./interfaces/users.repository";
import { TYPES } from "./types/di-token";
import { User } from "./domain/entities/user.entity";
import { generateUUID } from "@/shared/helpers/uuid";

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
    const userEntity = await this.dbClient.writer(async (c): Promise<User> => {
      const user = await this.users.findBySub(d.getSub(), c);

      if (user === null) {
        const newEntity = UserFactory.toEntityFromSaveDTOWithId(
          generateUUID(),
          d,
        );
        await this.users.create(newEntity, c);
        return newEntity;
      } else {
        const updateEntity = UserFactory.toEntityFromSaveDTOWithId(
          user.getId(),
          d,
        );
        await this.users.update(updateEntity, c);
        return updateEntity;
      }
    });

    return UserFactory.toDtoFromEntity(userEntity);
  }
}
