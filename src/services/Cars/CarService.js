import $api from "../../api/Api";

export default class CarService {
  static async getCars() {
    return await $api.get("/CarSales");
  }

  static async createCar(carData) {
    try {
      const response = await $api.post("/CarSales", carData);
      return response.data;
    } catch (error) {
      console.error("Error creating car:", error);
      throw error;
    }
  }

  static async updateCar(id, carData) {
    try {
      const response = await $api.put(`/CarSales/${id}`, carData);
      return response.data;
    } catch (error) {
      console.error(`Error updating car with id ${id}:`, error);
      throw error;
    }
  }

  static async deleteCar(id) {
    try {
      const response = await $api.delete(`/CarSales/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting car with id ${id}:`, error);
      throw error;
    }
  }

  static async createOrder(idCarSales, idUsers) {
    try {
      const response = await $api.post("/OrdersCars", {
        idCarSales,
        idUsers,
      });
      return response.data; 
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  }

  static async getOrdersCars() {
    try {
      const response = await $api.get("/OrdersCars");
      return response.data;
    } catch (error) {
      console.error("Error fetching orders cars:", error);
      throw error;
    }
  }
  static async deleteOrder(id) {
    try {
      const response = await $api.delete(`/OrdersCars/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting order with id ${id}:`, error);
      throw error;
    }
  }
}
