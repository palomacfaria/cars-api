import { Request, Response } from "express";
import { CarsServices } from "../services/cars.services";

interface ICarsControllers {
  create(req: Request, res: Response): Response;
  getMany(req: Request, res: Response): Response;
  getOne(req: Request, res: Response): Response;
  /*     delete(req: Request, res: Response):Response
    update(req: Request, res: Response):Response */
}

export class CarsControllers implements ICarsControllers {
  create(req: Request, res: Response): Response {
    const carServices = new CarsServices();

    const create = carServices.create(req.body);

    return res.status(200).json(create);
  }
  getMany(req: Request, res: Response): Response {
    const { search, year } = req.query;

    const carServices = new CarsServices();

    const getMany = carServices.getMany(search as string, year as string);

    return res.status(200).json(getMany);
  }
  getOne(req: Request, res: Response): Response {
    const carServices = new CarsServices();

    const getOne = carServices.getOne(req.params.id)

    return res.status(200).json(getOne);
  }
  /*     delete(req: Request, res: Response):Response{
        
    }
    update(req: Request, res: Response):Response{
        
    } */
}
