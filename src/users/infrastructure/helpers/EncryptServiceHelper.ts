import { EncryptService } from "../../application/services/EncryptService";
import * as bcrypt from 'bcrypt';

const auxSaltRounds = process.env.SALT_ROUNDS ?? "";
const saltRounds = Number(auxSaltRounds);
const secretWord = process.env.SECRET_WORD ?? "";

export class EncryptServiceHelper implements EncryptService{
    encryptPassword(password: string): string {
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        return hashedPassword;
    }

    authPassword(providePassword: string, encryptPassword: string): boolean {
        console.log("Password: "+providePassword+" Password de la db: "+encryptPassword);
        
        const auth: boolean = bcrypt.compareSync(providePassword, encryptPassword);
        
        return auth;
    }
}