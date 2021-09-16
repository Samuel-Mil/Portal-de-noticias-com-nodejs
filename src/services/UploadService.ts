import { getCustomRepository } from "typeorm";
import { ArticlesImagesRepositories } from "../repositories/ArticlesImagesRepositories";

class UploadService {
  async execute(id: string, image_name: string) {
    const repositorie = getCustomRepository(ArticlesImagesRepositories);

    if (!id) {
      throw new Error("Pass id in url!");
    }

    if (!image_name) {
      throw new Error("Pass image_name in body!");
    }

    const image = repositorie.create({ article_id: id, image_name });

    await repositorie.save(image);

    return image;
  }
}

export { UploadService };
