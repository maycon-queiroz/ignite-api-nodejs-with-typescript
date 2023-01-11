import { IDataUserDTO } from "../dtos/IDataUserDTO"
import { User } from "../entities/User"

interface IUserRepository {
  findByEmail(email: string): Promise<User>
  create(dataUser: IDataUserDTO): Promise<void>
}

export { IUserRepository }