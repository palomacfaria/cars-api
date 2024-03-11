import { ICar } from "../interfaces/cars.interfaces";

export const carsDatabase: ICar[] = [];

let id = 0;

export const generateCarId = () => {
    id++;
    return id;
}

export const resetCarsDatabase = () => {
    carsDatabase.length = 0;
}