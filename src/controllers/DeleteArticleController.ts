import { Request, Response } from "express";
import { DeleteArticleService } from "../services/DeleteArticleService";

class DeleteArticleController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const service = new DeleteArticleService();

    const article = await service.execute(id);

    return res.json({ msg: "Article deleted!", article });
  }
}

export { DeleteArticleController };
