import { getCustomRepository } from "typeorm";
import { ArticlesRepositories } from "../repositories/ArticlesRepositories";

class DeleteArticleService {
  async execute(id: string) {
    const repository = getCustomRepository(ArticlesRepositories);

    if (!id) {
      throw new Error("Pass id in url");
    }

    const article = await repository.delete({ id });

    return article;
  }
}

export { DeleteArticleService };
