import { Prisma } from "@prisma/client";

export const TYPES = {
    UsersRepository: Symbol.for('UsersRepository'),
    DatabaseClientService: Symbol.for('DatabaseClientService'),
}