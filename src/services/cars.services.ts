import { carsDatabase, generateCarId } from "../database/cars";
import { ICar, TCreateBody, TUpdateBody } from "../interfaces/cars.interfaces";

interface ICarsServices {
  create(body: TCreateBody): ICar;
  getMany(search?: string, year?: string): ICar[];
  getOne(id: string): ICar;
  /*   delete(id: string): void;
  update(body:TUpdateBody, id: string): ICar; */
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
    //1- Sem Parâmetro -> Retorna todos os carros
    //2 - Se tiver busca -> Retorna apenas dados compativeis
    //3 - Se tiver ano -> Retornar carros compativeis com o ano
    //4 - Dois parâmetros...

    const cartlist = carsDatabase.filter((car) => {
      const searchRule = search
        ? car.model.toLowerCase().includes(search.toLowerCase())
        : true;

      const yearRule = year ? car.year === Number(year) : true;

      return searchRule && yearRule;
    });

    return cartlist;
  }
  getOne(id: string): ICar {
    const car = carsDatabase.find((car) => car.id === Number(id)) as ICar;

    return car;
  }
  /*     delete(id: string): void {
        
    }
    update(body: Partial<TCreateBody>, id: string): ICar {
        
    } */
}
