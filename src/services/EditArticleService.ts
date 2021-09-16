import { getCustomRepository } from "typeorm";
import { ArticlesRepositories } from "../repositories/ArticlesRepositories";

class EditArticleService {
  async execute(id: string, replace: object) {
    const repositorie = getCustomRepository(ArticlesRepositories);

    if (!id) {
      throw new Error("Pass id in url");
    }

    const updated = await repositorie.update({ id }, replace);
    console.log(updated);

    return true;
  }
}

export { EditArticleService };
