import { User } from "../entities/user.entity";

export interface IUsersRepository<T> {
    createUser(user: User, tx: T): Promise<void>;
}