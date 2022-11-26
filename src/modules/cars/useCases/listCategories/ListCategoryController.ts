import { Response, Request } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const categories = await this.listCategoryUseCase.execute();

    return response.status(200).json(categories)
  }
}

export { ListCategoryController };