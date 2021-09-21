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

    if (!title) {
      throw new Error("Title is empty");
    }

    if (!content) {
      throw new Error("Content is empty");
    }

    if (!category) {
      throw new Error("Category is empty");
    }

    if (!author) {
      throw new Error("Author is empty");
    }

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
