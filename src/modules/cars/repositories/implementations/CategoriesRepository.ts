

import { Category } from '../../entities/Category';
import { ICategoryRepository, ICreateCategoryDTO } from '../ICategoryRepository';
import { AppDataSource } from '../../../../database/data-source';
import { Repository } from 'typeorm';

class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>;
  constructor() {
    this.repository = AppDataSource.getRepository(Category)
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    return await this.repository.find();
  }

  async findByName(name: string): Promise<Category> {
    return await this.repository.findOne({
      where: {
        name
      }
    })
  }
}

export { CategoriesRepository }