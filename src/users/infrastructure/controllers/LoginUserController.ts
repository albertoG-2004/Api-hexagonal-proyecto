import { Request, Response } from "express";
import { LoginUserUseCase } from "../../application/methods/LoginUserUseCase";

export class LoginUserController {
    constructor(readonly loginUserUseCase: LoginUserUseCase){}

    async run(req: Request, res: Response){
        const data = req.body;

        try {
            const result = await this.loginUserUseCase.run(
                data.username,
                data.password
            );
            if (result) {
                res.status(200).send({
                    status: "success",
                    data: {
                        message: "User found"
                    },
                });
            }else{
                res.status(204).send({
                    status: "error",
                    data: {
                        message: "User not found"
                    },
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha currio un error",
                message: error,
            });
        }
    }
}