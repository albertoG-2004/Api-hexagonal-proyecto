import { CreateUserController } from "../controllers/CreateUserController";
import { CreateUserUseCase } from "../../application/methods/CreateUserUseCase";
import { GetUserByUsernameController } from "../controllers/GetUserByUsernameController";
import { GetUserByUsernameUseCase } from "../../application/methods/GetUserByUsernameUseCase";
import { MySqlUserRepository } from "../repository/MySqlUserRepository";
import { EncryptServiceHelper } from "../helpers/EncryptServiceHelper";
import { CreateIDServiceHelper } from "../helpers/CreateIDServiceHelper";

export const mySqlUserRepository = new MySqlUserRepository();

export const encryptServiceHelper = new EncryptServiceHelper();
export const createIDServiceHelper = new CreateIDServiceHelper();

export const createUserUseCase = new CreateUserUseCase(mySqlUserRepository, encryptServiceHelper, createIDServiceHelper);
export const getUserByUsernameUseCase = new GetUserByUsernameUseCase(mySqlUserRepository, encryptServiceHelper);

export const createUserController = new CreateUserController(createUserUseCase);
export const getUserByUsernameController = new GetUserByUsernameController(getUserByUsernameUseCase);