import { Router } from 'express'

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateSpecificationService(specificationRepository);

  try {
    createCategoryService.execute({ name, description });
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }

  response.status(201).send();
});

specificationRoutes.get('/', (request, response) => {
  const specifications = specificationRepository.list();

  return response.status(200).json(specifications)
});


export { specificationRoutes }