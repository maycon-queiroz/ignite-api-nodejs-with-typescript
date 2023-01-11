import { Repository } from 'typeorm';

import { IDataUserDTO } from "../../dtos/IDataUserDTO";
import { IUserRepository } from "../IUserRepository";
import { User } from '../../entities/User'
import { AppDataSource } from '../../../../database/data-source';


class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({
      where: {
        email
      }
    });

    return user;
  }

  async create({ name, username, email, password, drive_license }: IDataUserDTO): Promise<void> {
    const user = this.repository.create({
      name, username, email, password, drive_license
    });

    await this.repository.save(user);
  }

}

export { UserRepository }