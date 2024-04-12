import { EncryptService } from "../../application/services/EncryptService";
import * as bcrypt from 'bcrypt';

const auxSaltRounds = process.env.SALT_ROUNDS ?? "";
const saltRounds = Number(auxSaltRounds);

export class EncryptServiceHelper implements EncryptService{
    encryptPassword(password: string): string {
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        return hashedPassword;
    }

    authPassword(word: string, password: string): boolean {
        let auth = bcrypt.compareSync(word, password);
        
        return auth;
    }
}