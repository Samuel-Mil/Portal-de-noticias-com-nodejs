import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUsersService {
  async listAll() {
    const repositorie = getCustomRepository(UsersRepositories);

    const users = await repositorie.find();

    return users;
  }

  async listOne(id: string) {
    const repositorie = getCustomRepository(UsersRepositories);

    let users = await repositorie.findOne({ id });

    if (!id) {
      let users = await repositorie.find();
    }

    return users;
  }
}

export { ListUsersService };
