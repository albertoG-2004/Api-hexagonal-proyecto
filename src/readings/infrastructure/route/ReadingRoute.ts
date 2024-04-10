import express from "express";

import { createReadingController } from "../dependency/DependenciesReading";

export const readingRouter = express.Router();

readingRouter.post("/", createReadingController.run.bind(createReadingController));