import express from 'express';
import swaggerUi from "swagger-ui-express"

import { router } from './routes';
import swaggerFiler from "../swagger.json";

const app = express();

app.use(express.json());

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFiler));

app.use(router);

app.listen(3333);