import {
  Entity,
  PrimaryColumn,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Article } from "./Article";

import { v4 as uuid } from "uuid";

@Entity("articles_images")
class ArticleImage {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  article_id: string;

  @Column()
  image_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { ArticleImage };
