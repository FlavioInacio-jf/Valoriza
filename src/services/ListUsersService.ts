import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { instanceToPlain } from "class-transformer"

export class ListUserService {
  async execute() {
    const usersRespositories = getCustomRepository(UsersRepositories);

    const users = await usersRespositories.find()

    return instanceToPlain(users);
  }
}