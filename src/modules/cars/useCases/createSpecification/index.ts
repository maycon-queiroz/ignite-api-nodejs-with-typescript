import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';

export default (): CreateSpecificationController => {
  const specificationRepository = new SpecificationRepository();
  const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
  const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

  return createSpecificationController;
}