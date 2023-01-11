import { container } from 'tsyringe';
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';

import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';

import { UserRepository } from '../../modules/accounts/repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository'

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository", CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository", SpecificationRepository
)

container.registerSingleton<IUserRepository>(
  "UserRepository", UserRepository
)

