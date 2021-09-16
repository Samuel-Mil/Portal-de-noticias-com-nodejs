import { getCustomRepository } from "typeorm";
import { ArticlesRepositories } from "../repositories/ArticlesRepositories";

class ListArticlesService {
  async listAll() {
    const repositorie = getCustomRepository(ArticlesRepositories);

    const users = await repositorie.find();

    return users;
  }

  async listOne(id: string) {
    const repositorie = getCustomRepository(ArticlesRepositories);

    let users = await repositorie.findOne({ id });

    if (!id) {
      let users = await repositorie.find();
    }

    return users;
  }
}

export { ListArticlesService };
