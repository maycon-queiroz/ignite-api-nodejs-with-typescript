import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  token: string
  user: {
    username: string
    email: string
  }
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Username or Password not found");
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Username or Password not found");
    }

    const token = sign({}, "d6919312cac7020e8822b612223a3cc7", {
      subject: user.id,
      expiresIn: '1d'
    })

    const sessionResponse: IResponse = {
      token,
      user: {
        username: user.username,
        email: user.email,
      }
    }

    return sessionResponse;
  }
}

export { AuthenticateUserUseCase }