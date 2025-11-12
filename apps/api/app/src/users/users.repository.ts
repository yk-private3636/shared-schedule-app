import { User } from "./entities/user.entity";
import { IUsersRepository } from "./interfaces/users.repository.interface";
import { PrismaClient } from '@prisma/client'

export class UsersRepository implements IUsersRepository<PrismaClient> {
    async createUser(user: User, tx: PrismaClient): Promise<void> {
        await tx.user.create({
            data: {
                id: user.getId(),
                sub: user.getSub(),
                email: user.getEmail(),
                family_name: user.getFamilyName(),
                given_name: user.getGivenName()
            }
        });
    }
}