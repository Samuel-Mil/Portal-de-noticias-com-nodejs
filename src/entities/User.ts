import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  profile_pic: string;

  @Column()
  isAdmin: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
