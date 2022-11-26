import express from 'express';
import swaggerUi from "swagger-ui-express"

import { router } from './routes';
import swaggerFiler from "./swagger.json";

import { AppDataSource } from './database/data-source';

AppDataSource.initialize().then(async () => {
  const app = express();

  app.use(express.json());

  app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFiler));

  app.use(router);

  return app.listen(3333);

}).catch(error => console.log(error));
