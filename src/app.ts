import "express-async-errors";
import express, { json } from "express";
import { carsRouter } from "./routes/cars.routes";
import { HandleErrors } from "./errors/handleErrors.middlewares";

export const app = express();

app.use(json());

app.use("/cars", carsRouter);

app.use(HandleErrors.execute);
