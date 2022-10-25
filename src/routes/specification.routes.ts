import { Router } from 'express'

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories';


const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

specificationRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});


export { specificationRoutes }