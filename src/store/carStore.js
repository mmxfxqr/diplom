import { makeAutoObservable } from "mobx";
import CarService from "../services/Cars/CarService";

export default class CarStore {
  cars = [];
  ordersCars = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCars(cars) {
    this.cars = cars;
  }

  async getOrdersCars() {
    try {
      const ordersCars = await CarService.getOrdersCars();
      this.setOrdersCars(ordersCars);
    } catch (error) {
      console.error("Error getting orders cars:", error);
    }
  }

  setOrdersCars(ordersCars) {
    this.ordersCars = ordersCars;
  }

  async deleteOrder(id) {
    try {
      await CarService.deleteOrder(id);
      this.ordersCars = this.ordersCars.filter(order => order.id !== id);
    } catch (error) {
      console.error(`Error deleting order with id ${id}:`, error);
    }
  }

  async getCars() {
    try {
      const response = await CarService.getCars();
      this.setCars(response.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  }

  async createCar(carData) {
    try {
      const newCar = await CarService.createCar(carData);
      this.cars.push(newCar);
    } catch (error) {
      console.error("Error creating car:", error);
    }
  }

  async updateCar(id, carData) {
    try {
      await CarService.updateCar(id, carData);
      const index = this.cars.findIndex((car) => car.id === id);
      if (index !== -1) {
        this.cars[index] = { ...this.cars[index], ...carData };
      }
    } catch (error) {
      console.error(`Error updating car with id ${id}:`, error);
    }
  }

  async deleteCar(id) {
    try {
      await CarService.deleteCar(id);
      this.cars = this.cars.filter((car) => car.id !== id);
    } catch (error) {
      console.error(`Error deleting car with id ${id}:`, error);
    }
  }
}
