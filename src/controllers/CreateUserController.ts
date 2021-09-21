import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { login, password, username, isAdmin } = req.body;
    const service = new CreateUserService();

    console.log(req.file);

    const user = await service.execute({ login, password, username, isAdmin });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
