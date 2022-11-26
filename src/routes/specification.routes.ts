import { Router } from 'express'

import createCategoryController from '../modules/cars/useCases/createSpecification';
import listCategoryController from '../modules/cars/useCases/listSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  return createCategoryController().handle(request, response);
});

specificationRoutes.get('/', (request, response) => {
  return listCategoryController().handle(request, response);
});


export { specificationRoutes }