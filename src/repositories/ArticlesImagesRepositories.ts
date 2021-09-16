import { EntityRepository, Repository } from "typeorm";
import { ArticleImage } from "../entities/ArticleImage";

@EntityRepository(ArticleImage)
class ArticlesImagesRepositories extends Repository<ArticleImage> {}

export { ArticlesImagesRepositories };
