import { User } from "../entities/user.entity";

export interface IUsersRepository {
    create(user: User, tx: unknown): Promise<void>;
}