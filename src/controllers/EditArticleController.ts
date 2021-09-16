import { Request, Response } from "express";
import { EditArticleService } from "../services/EditArticleService";

class EditArticleController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const service = new EditArticleService();

    const article = await service.execute(id, req.body);

    return res.json({ msg: "Edited successfuly" });
  }
}

export { EditArticleController };
