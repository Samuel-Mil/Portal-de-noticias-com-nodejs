import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class CreateUserService {
  async execute() {
    const repositorie = getCustomRepository(UsersRepositories);
  }
}

export { CreateUserService };
