import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

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
}

export { User };
