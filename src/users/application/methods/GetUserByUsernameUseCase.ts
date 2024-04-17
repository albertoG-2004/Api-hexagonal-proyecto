import { User } from "../../domain/entity/User";
import { UserRepository } from "../../domain/interface/UserRepository";
import { EncryptServiceHelper } from "../../infrastructure/helpers/EncryptServiceHelper";

export class GetUserByUsernameUseCase {
    constructor(readonly userRepository: UserRepository, readonly encryptServiceHelper: EncryptServiceHelper){}

    async run(
        username: string,
        password: string
    ): Promise<boolean | null> {
        try {
            const result: any | null = await this.userRepository.getUserByUsername(username);
            console.log("Datos ingresados: ", username, password);
            console.log("Datos de la consulta: ",result);
            if (result) {
                const verify: boolean = await this.encryptServiceHelper.authPassword(password, result[0].password);
                if (verify) {
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}