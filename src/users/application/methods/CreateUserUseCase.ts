import { User } from "../../domain/entity/User";
import { UserRepository } from "../../domain/interface/UserRepository";
import { EncryptServiceHelper } from "../../infrastructure/helpers/EncryptServiceHelper";
import { CreateIDServiceHelper } from "../../infrastructure/helpers/CreateIDServiceHelper";

export class CreateUserUseCase {
    constructor(readonly userRepository: UserRepository, readonly encryptServiceHelper: EncryptServiceHelper,
        readonly createIDServiceHelper: CreateIDServiceHelper
    ){}

    async run(
        username: string,
        cellPhone: string,
        password: string
    ): Promise<User | null> {
        let id = this.createIDServiceHelper.createID();
        let pass = this.encryptServiceHelper.encryptPassword(password);
        try {
            const user: any = await this.userRepository.createUser(
                id,
                username,
                cellPhone,
                pass
            );
            return user;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}