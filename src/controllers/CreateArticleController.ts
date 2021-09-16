import { Request, Response } from "express";
import { CreateArticleService } from "../services/CreateArticleService";

class CreateArticleController {
  async handle(req: Request, res: Response) {
    const { title, content, category, author } = req.body;
    const service = new CreateArticleService();

    console.log(req.file);

    const article = await service.execute({ title, content, category, author });

    return res.status(201).json(article);
  }
}

export { CreateArticleController };
