import { carsDatabase, generateCarId } from "../database/cars";
import { ICar, TCreateBody, TUpdateBody } from "../interfaces/cars.interface";

interface ICarsServices {
   create(body: TCreateBody): ICar;
   getMany(search?: string, year?: string): ICar[];
   getOne(id: string): ICar;
   delete(id: string): void;
   update(body: TUpdateBody, id: string): ICar;
}

export class CarsServices implements ICarsServices {
   create(body: TCreateBody): ICar {
      const date = new Date();

      const newCar: ICar = {
         id: generateCarId(),
         model: body.model,
         year: body.year,
         km: body.km,
         brand: body.brand,
         price: body.price,
         createdAt: date,
         updatedAt: date,
      };

      carsDatabase.push(newCar);

      return newCar;
   }

   getMany(search?: string, year?: string): ICar[] {
      const carsList = carsDatabase.filter((car) => {
         const searchRule = search
            ? car.model.toLowerCase().includes(search.toLowerCase())
            : true;
         const yearRule = year ? car.year === Number(year) : true;

         return searchRule && yearRule;
      });

      return carsList;
   }

   getOne(id: string): ICar {
      const car = carsDatabase.find((car) => car.id === Number(id)) as ICar;

      return car;
   }

   delete(id: string): void {
      const index = carsDatabase.findIndex((car) => car.id === Number(id));

      carsDatabase.splice(index, 1);
   }

   update(body: Partial<TCreateBody>, id: string): ICar {
      const currentCar = carsDatabase.find((car) => car.id === Number(id)) as ICar;

      const date = new Date();

      const newCar = { ...currentCar, ...body, updatedAt: date };

      const index = carsDatabase.findIndex((car) => car.id === Number(id));

      carsDatabase.splice(index, 1, newCar);

      return newCar;
   }
}
