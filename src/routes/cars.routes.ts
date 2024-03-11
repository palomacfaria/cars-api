import { Router } from "express";
import { CarsControllers } from "../controllers/cars.controllers";
import { isCarIdValid } from "../middlewares/isCarIdValid.middlewares";

export const carsRouter = Router();

const carsControllers = new CarsControllers();

carsRouter.post("/", carsControllers.create);
carsRouter.get("/", carsControllers.getMany);
carsRouter.get("/:id", isCarIdValid.execute, carsControllers.getOne);
carsRouter.delete("/:id", isCarIdValid.execute, carsControllers.delete);
carsRouter.patch("/:id", isCarIdValid.execute, carsControllers.update);
