import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoryController';
import importCategoryController from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();
const upload = multer({ dest: 'tmp/' })

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoryController.handle)

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController().handle(request, response);
});

export { categoriesRoutes }