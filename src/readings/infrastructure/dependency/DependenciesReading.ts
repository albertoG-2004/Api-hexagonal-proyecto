import { CreateReadingController } from "../controllers/CreateReadingController";
import { CreateReadingUseCase } from "../../application/methods/CreateReadingUseCase";
import { MySqlReadingRepository } from "../respository/MySqlReadingRepository";

export const mySqlReadingRepository = new MySqlReadingRepository();

export const createReadingUseCase = new CreateReadingUseCase(mySqlReadingRepository);

export const createReadingController = new CreateReadingController(createReadingUseCase);