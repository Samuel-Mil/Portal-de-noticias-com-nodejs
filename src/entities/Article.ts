import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("articles")
class Article {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  category: string;

  @Column()
  author: string;

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

export { Article };
