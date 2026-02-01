import { Inject, Injectable } from "@nestjs/common";
import type { IDatabaseClientService } from "@/shared/interfaces/database-client.service";
import type { SaveUserDTO } from "./dto/save.user.dto";
import type { UserDTO } from "./dto/user.dto";
import { UserFactory } from "./factories/user.entity.factory";
import type { IUsersRepository } from "./interfaces/users.repository";
import { TYPES } from "./constants/di";
import { TYPES as sharedTYPES } from "@/shared/constants/di";
import { User } from "./domain/entities/user.entity";
import { generateUUID } from "@/shared/helpers/uuid";
import { UserDTOFactory } from "./factories/user.dto.factory";

@Injectable()
export class UsersService {
  constructor(
    @Inject(TYPES.UsersRepository)
    private readonly users: IUsersRepository,
    @Inject(sharedTYPES.DatabaseClientService)
    private readonly dbClient: IDatabaseClientService,
  ) {}

  public async findOneBySub(sub: string): Promise<UserDTO | null> {
    const user = await this.dbClient.reader(async (c): Promise<User | null> => {
      return await this.users.findBySub(sub, c);
    });

    return user ? UserDTOFactory.toDtoFromEntity(user) : null;
  }

  public async save(d: SaveUserDTO): Promise<UserDTO> {
    const userEntity = await this.dbClient.writer(async (c): Promise<User> => {
      const user = await this.users.findBySub(d.getSub(), c);

      if (user === null) {
        const newEntity = UserFactory.toEntityFromSaveDTOWithIdStatus(
          generateUUID(),
          "ACTIVE",
          d,
        );
        await this.users.create(newEntity, c);
        return newEntity;
      } else {
        if (user.isSuspended()) {
          return user;
        }

        if (user.isWithdrawn()) {
          user.activate();
        }

        user.updateProfile(d.getEmail(), d.getFamilyName(), d.getGivenName());
        await this.users.update(user, c);

        return user;
      }
    });

    return UserDTOFactory.toDtoFromEntity(userEntity);
  }
}
