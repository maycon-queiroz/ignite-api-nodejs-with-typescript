import { Router } from 'express';
import { v4 as uuid } from 'uuid'


const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description,
    id: uuid()
  })

  return response.status(201).json(categories);
});

export { categoriesRoutes }