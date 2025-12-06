import { User } from "../entities/user.entity";

export interface IUsersRepository {
    findBySub(sub: string, tx: unknown): Promise<User | null>;
    create(user: User, tx: unknown): Promise<void>;
    update(user: User, tx: unknown): Promise<void>;
}