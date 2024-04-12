import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/methods/CreateUserUseCase";

export class CreateUserController {
    constructor(readonly createUserUseCase: CreateUserUseCase){}

    async run(req: Request, res: Response){
        const data = req.body;

        try {
            const user = await this.createUserUseCase.run(
                data.username,
                data.cellPhone,
                data.password
            );

            if (user) {
                res.status(201).send({
                    status: "success",
                    data: {
                        id_user: user?.id_user,
                        username: user?.username,
                        cellPhone: user?.cellPhone,
                        password: user?.password
                    },
                });
            }
            else{
                res.status(204).send({
                    status: "error",
                    data: "User not added"
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error",
                messages: error
            });
        }
    }
}