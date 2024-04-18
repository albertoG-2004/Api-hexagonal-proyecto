import { query } from "../../../database/database";
import { User } from "../../domain/entity/User";
import { UserRepository } from "../../domain/interface/UserRepository";

export class MySqlUserRepository implements UserRepository {
    async createUser(
        id_user: string, 
        username: string, 
        cellPhone: string, 
        password: string
    ): Promise<User | null> {
        const sql = "INSERT INTO users (id_user, username, cellPhone, password) VALUES (?,?,?,?)";
        const params: any[] = [id_user, username, cellPhone, password];

        try {
            const [result]: any = await query(sql, params);
            return new User(id_user, username, cellPhone, password);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getUserByUsername(
        username: string
    ): Promise<User | null> {
        const sql = "SELECT id_user, username, password FROM users WHERE username = ?";
        const params: any[] = [username];
        
        try {
            const [result]: any = await query(sql, params);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}