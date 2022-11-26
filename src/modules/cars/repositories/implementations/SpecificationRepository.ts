import { AppDataSource } from '../../../../database/data-source';
import { ICreateSpecificationDTO, ISpecificationRepository } from '../ISpecificationRepository';
import { Specification } from '../../entities/Specification';
import { Repository } from 'typeorm';


class SpecificationRepository implements ISpecificationRepository {
  private specifications: Repository<Specification>

  constructor() {
    this.specifications = AppDataSource.getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.specifications.create({
      name,
      description,
    });

    await this.specifications.save(specification);
  }

  async findByName(name: string): Promise<Specification | undefined> {
    return await this.specifications.findOne({ where: { name } });
  }

  async list(): Promise<Specification[]> {
    return await this.specifications.find();
  }

}

export { SpecificationRepository }