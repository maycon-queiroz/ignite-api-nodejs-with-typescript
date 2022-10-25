import { ListCategoryController } from './ListCategoryController';
import { ListCategoryUseCase } from './ListCategoryUseCase';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';

const categoryRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository)
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };