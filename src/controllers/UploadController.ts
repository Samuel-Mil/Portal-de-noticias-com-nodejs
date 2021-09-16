import { Request, Response } from "express";
import { UploadService } from "../services/UploadService";

class UploadController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const service = new UploadService();

    const image = service.execute(id, req.file.filename);

    return res.status(201).json({ msg: "Upload succefully" });
  }
}

export { UploadController };
