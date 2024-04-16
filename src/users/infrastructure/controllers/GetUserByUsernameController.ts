import { Request, Response } from "express";
import { GetUserByUsernameUseCase } from "../../application/methods/GetUserByUsernameUseCase";

export class GetUserByUsernameController {
    constructor(readonly getUserByUsernameUseCase: GetUserByUsernameUseCase){}

    async run(req: Request, res: Response){
        const username = req.params.username;
        const data = req.body;

        if (!username || !data.password) {
            return res.status(400).send({
                status: "error",
                message: "Both username and password are required.",
            });
        }

        try {
            const result = await this.getUserByUsernameUseCase.run(
                username,
                data.password
            );
            if (result) {
                res.status(200).send({
                    status: "success",
                    data: {
                        message: "User found and verified password"
                    },
                });
            }else{
                res.status(204).send({
                    status: "error",
                    data: {
                        message: "User not found or incorrect password"
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