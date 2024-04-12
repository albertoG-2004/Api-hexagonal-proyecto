import { User } from "../../domain/entity/User";
import { UserRepository } from "../../domain/interface/UserRepository";

export class LoginUserUseCase {
    constructor(readonly userRepository: UserRepository){}

    async run(
        username: string,
        password: string
    ): Promise<boolean | null> {
        try {
            const result = await this.userRepository.login(username, password);
            console.log("Datos: ", result);
            if (result) {
                return true;
            }else{
                return false;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}