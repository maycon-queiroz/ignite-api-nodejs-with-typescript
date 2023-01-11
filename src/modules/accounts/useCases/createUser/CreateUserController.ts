import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password, drive_license } = request.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    try {
      await createUserUseCase.execute({ name, username, email, password, drive_license });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }

    return response.status(201).send();
  }
}

export { CreateUserController }