import { Category } from '../model/Category';
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoryRepository';

class PostgresCategoryRepositories implements ICategoryRepository {
  list(): Category[] {
    throw new Error('Method not implemented.');
  }
  findByName(name: string): Category {
    throw new Error('Method not implemented.');
  }
  create({ name, description }: ICreateCategoryDTO): void {
    throw new Error('Method not implemented.');
  }

}

export { PostgresCategoryRepositories }