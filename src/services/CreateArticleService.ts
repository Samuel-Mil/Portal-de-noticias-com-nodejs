import { getCustomRepository } from "typeorm";
import { ArticlesRepositories } from "../repositories/ArticlesRepositories";

interface IRequest {
  title: string;
  content: string;
  category: string;
  author: string;
}

class CreateArticleService {
  async execute({ title, content, category, author }: IRequest) {
    const repositorie = getCustomRepository(ArticlesRepositories);

    const article = repositorie.create({
      title,
      content,
      category,
      author,
    });

    await repositorie.save(article);

    return article;
  }
}

export { CreateArticleService };
