import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { login, password } = req.body;
    const service = new AuthenticateUserService();

    const token = await service.execute({ login, password });

    return res.json(token);
  }
}

export { AuthenticateUserController };
