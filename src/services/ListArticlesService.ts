import { getCustomRepository } from "typeorm";
import { ArticlesRepositories } from "../repositories/ArticlesRepositories";

class ListArticlesService {
  async listAll() {
    const repositorie = getCustomRepository(ArticlesRepositories);

    const articles = await repositorie.find();

    return articles;
  }

  async listOne(id: string) {
    const repositorie = getCustomRepository(ArticlesRepositories);

    let articles = await repositorie.findOne({ id });

    if (!id) {
      let articles = await repositorie.find();
    }

    return articles;
  }
}

export { ListArticlesService };
