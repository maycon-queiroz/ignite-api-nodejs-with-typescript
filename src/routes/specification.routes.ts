import { Router } from 'express'
import { ensuredAuthenticated } from '../middlewares/ensuredAuthenticated';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/useCases/listSpecification/ListSpecificationController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listCategoryController = new ListSpecificationController();

specificationRoutes.use(ensuredAuthenticated);
specificationRoutes.post('/', createSpecificationController.handle);
specificationRoutes.get('/', listCategoryController.handle);

export { specificationRoutes }