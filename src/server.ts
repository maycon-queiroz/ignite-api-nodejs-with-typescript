import express from 'express';
import 'express-async-errors';
import swaggerUi from "swagger-ui-express"

import { AppDataSource } from './database/data-source';
import { AppErrorsMiddleware } from './middlewares/app.errors'

import "./shared/container";
import { router } from './routes';
import swaggerFiler from "./swagger.json";

AppDataSource.initialize().then(async () => {
  const app = express();

  app.use(express.json());

  app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFiler));

  app.use(router);

  app.use(AppErrorsMiddleware);

  return app.listen(3333);

}).catch(error => console.log(error));
