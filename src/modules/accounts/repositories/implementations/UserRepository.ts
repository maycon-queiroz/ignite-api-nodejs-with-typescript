import { Repository } from 'typeorm';
import { hash } from 'bcryptjs'

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
    const user = this.repository.findOne({ where: { email } });

    return user;
  }

  async findById(id: string) {
    const user = this.repository.findOne({ where: { id } });

    return user;
  }

  async create({ name, username, email, password, drive_license, avatar, id }: IDataUserDTO): Promise<void> {

    const passwordHash = await hash(password, 8);

    const user = this.repository.create({
      name,
      username,
      email,
      password: passwordHash,
      drive_license,
      avatar,
      id
    });

    await this.repository.save(user);
  }

}

export { UserRepository }