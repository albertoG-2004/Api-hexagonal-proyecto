import { User } from "../entity/User";

export interface UserRepository{
    createUser(
        id_user: string,
        username: string,
        cellPhone: string,
        password: string
    ): Promise<User | null>;
    login(username: string, password: string): Promise<boolean | null>;
}