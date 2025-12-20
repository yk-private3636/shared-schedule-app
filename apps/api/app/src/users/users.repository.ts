import { User } from './entities/user.entity';
import { IUsersRepository } from './interfaces/users.repository.interface';
import { PrismaClient } from '@prisma/client';

export class UsersRepository implements IUsersRepository {
  public async findBySub(sub: string, tx: PrismaClient): Promise<User | null> {
    const userRecord = await tx.user.findUnique({
      where: {
        sub: sub,
      },
    });

    if (userRecord === null) {
      return null;
    }

    return new User(
      userRecord.id,
      userRecord.sub,
      userRecord.email,
      userRecord.family_name,
      userRecord.given_name,
    );
  }

  public async create(user: User, tx: PrismaClient): Promise<void> {
    await tx.user.create({
      data: {
        id: user.getId(),
        sub: user.getSub(),
        email: user.getEmail(),
        family_name: user.getFamilyName(),
        given_name: user.getGivenName(),
      },
    });
  }

  public async update(user: User, tx: PrismaClient): Promise<void> {
    await tx.user.update({
      where: {
        id: user.getId(),
      },
      data: {
        sub: user.getSub(),
        email: user.getEmail(),
        family_name: user.getFamilyName(),
        given_name: user.getGivenName(),
      },
    });
  }
}
