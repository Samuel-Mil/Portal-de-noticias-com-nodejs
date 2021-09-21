import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  login: string;
  password: string;
  username: string;
  isAdmin: boolean;
}
class CreateUserService {
  async execute({ login, password, username, isAdmin }: IUserRequest) {
    const repositorie = getCustomRepository(UsersRepositories);

    if (!login) {
      throw new Error("Login is empty!");
    }

    if (!password) {
      throw new Error("Password is empty!");
    }

    const userAlreadyExists = await repositorie.findOne({ login });

    if (userAlreadyExists) {
      throw new Error("THis user already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = repositorie.create({
      login,
      password: passwordHash,
      username,
      isAdmin,
    });

    await repositorie.save(user);

    return user;
  }
}

export { CreateUserService };
