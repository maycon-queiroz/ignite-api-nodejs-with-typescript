import { inject, injectable } from "tsyringe";

import { IDataUserDTO } from "../../dtos/IDataUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ name, username, email, password, drive_license }: IDataUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User Already Exists");
    }

    await this.userRepository.create({
      name, username, email, password, drive_license
    });
  }

}

export { CreateUserUseCase }