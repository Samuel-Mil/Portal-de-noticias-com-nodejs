import { Request, Response } from "express";
import { ListArticlesService } from "../services/ListArticlesService";

class ListArticlesController {
  async listAll(req: Request, res: Response) {
    const service = new ListArticlesService();

    const articles = await service.listAll();

    return res.json(articles);
  }

  async listOne(req: Request, res: Response) {
    const id = req.params.id;
    const service = new ListArticlesService();

    const articles = await service.listOne(id);

    return res.json({ articles });
  }
}

export { ListArticlesController };
