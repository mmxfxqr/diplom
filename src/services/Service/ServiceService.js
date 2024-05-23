import $api from "../../api/Api";

export default class ServiceService {
  static async getServices() {
    return await $api.get("/Services");
  }

  static async createOrder(idService, userId) {
    return await $api.post('/Orders', {
      idServices: idService,
      idUsers: userId,
    });
  }

  static async getOrders() {
    try {
      const response = await $api.get("/Orders");
      return response.data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  }

  static async deleteOrder(id) {
    try {
      const response = await $api.delete(`/Orders/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting order with id ${id}:`, error);
      throw error;
    }
  }

  static async deleteService(id) {
    try {
      const response = await $api.delete(`/Services/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting service with id ${id}:`, error);
      throw error;
    }
  }

  static async updateService(id, updatedServiceData) {
    try {
      const response = await $api.put(`/Services/${id}`, updatedServiceData);
      return response.data;
    } catch (error) {
      console.error(`Error updating service with id ${id}:`, error);
      throw error;
    }
  }

  static async createService(serviceData) {
    try {
      const response = await $api.post('/Services', serviceData);
      return response.data;
    } catch (error) {
      console.error("Error creating service:", error);
      throw error;
    }
  }
}
