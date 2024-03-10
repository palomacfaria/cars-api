import { ICar } from "../interfaces/cars.interface";

export const carsDatabase: ICar[] = [];

let id = 0;

export const generateCarId = () => {
    id++;
    return id;
}

export const resetCarsDatabase = () => {
    carsDatabase.length = 0;
}