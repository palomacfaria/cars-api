import { NextFunction, Request, Response } from "express";
import { carsDatabase } from "../database/cars";
import { AppError } from "../errors/appError";

export class IsCarIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!carsDatabase.some(car => car.id === Number(req.params.id))){
            throw new AppError(404, "Car not found");
        }

        next();
    }
}