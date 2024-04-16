import { User } from "../entity/User";

export interface UserRepository{
    createUser(
        id_user: string,
        username: string,
        cellPhone: string,
        password: string
    ): Promise<User | null>;
    getUserByUsername(username: string): Promise< User | null>;
}