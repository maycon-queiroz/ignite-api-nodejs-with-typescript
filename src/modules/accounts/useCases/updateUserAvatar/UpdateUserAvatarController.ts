
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase'


class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const avatar_file = request.file.filename
    const { id } = request.user

    const updateAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)

    await updateAvatarUseCase.execute({ user_id: id, avatar_file })
    return response.status(204).send()
  }
}

export { UpdateUserAvatarController };