import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {
  async listAll(req: Request, res: Response) {
    const service = new ListUsersService();

    const articles = await service.listAll();

    return res.json(articles);
  }

  async listOne(req: Request, res: Response) {
    const id = req.params.id;
    const service = new ListUsersService();

    const users = await service.listOne(id);

    return res.json({ users });
  }
}

export { ListUsersController };
