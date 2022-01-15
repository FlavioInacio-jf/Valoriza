import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { instanceToPlain } from "class-transformer";

export class ListTagsService {
  async execeute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find()
    return instanceToPlain(tags);
  }
}