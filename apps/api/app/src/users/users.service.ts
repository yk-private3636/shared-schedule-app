import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create.user.dto';
import { TYPES } from './types/di-token';
import { type IUsersRepository } from './interfaces/users.repository.interface';
import { PrismaClient } from '@prisma/client';
import { type IDatabaseClientService } from '@/shared/interfaces/database.client.service.interface';
import { generateUUID } from '@/shared/helpers/uuid';
import { User } from './entities/user.entity';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {

  constructor(
    @Inject(TYPES.UsersRepository) private readonly users: IUsersRepository<PrismaClient>,
    @Inject(TYPES.DatabaseClientService) private readonly dbClient: IDatabaseClientService 
  ) {}

  async create(d: CreateUserDTO): Promise<UserDTO> {

    const uuid = generateUUID();

    const tx = this.dbClient.getWriteClient();

    const user = new User(
      uuid,
      d.getSub(),
      d.getEmail(),
      d.getFamilyName(),
      d.getGivenName()
    );

    await this.users.createUser(user, tx);

    const rd = new UserDTO(
      user.getId(),
      user.getEmail(),
      user.getFamilyName(),
      user.getGivenName()
    );

    return rd;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
