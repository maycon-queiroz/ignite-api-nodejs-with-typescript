import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}


interface ICategoryRepository {
  list(): Category[];
  findByName(name: string): Category;
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepository, ICreateCategoryDTO };