import { Router } from 'express'

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import listCategoryController from '../modules/cars/useCases/listSpecification';

const specificationRoutes = Router();
const createCategoryController = new CreateSpecificationController();

specificationRoutes.post('/', createCategoryController.handle);

specificationRoutes.get('/', (request, response) => {
  return listCategoryController().handle(request, response);
});

export { specificationRoutes }