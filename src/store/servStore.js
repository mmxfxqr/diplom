import { makeAutoObservable } from "mobx";
import ServiceService from "../services/Service/ServiceService";

class ServiceStore {
  services = [];
  orders = [];

  constructor() {
    makeAutoObservable(this);
  }

  setServices(services) {
    this.services = services;
  }

  setOrders(orders) {
    this.orders = orders;
  }

  async createOrder(idService, userId) {
    try {
      await ServiceService.createOrder(idService, userId);
      console.log("Order created successfully!");
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  }

  async getServices() {
    try {
      const response = await ServiceService.getServices();
      this.setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  }

  async getOrders() {
    try {
      const orders = await ServiceService.getOrders();
      this.setOrders(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }

  async deleteOrder(id) {
    try {
      await ServiceService.deleteOrder(id);
      this.orders = this.orders.filter(order => order.id !== id);
    } catch (error) {
      console.error(`Error deleting order with id ${id}:`, error);
    }
  }

  async deleteService(id) {
    try {
      await ServiceService.deleteService(id);
      this.services = this.services.filter(service => service.id !== id);
    } catch (error) {
      console.error(`Error deleting service with id ${id}:`, error);
    }
  }

  async createService(serviceData) {
    try {
      const newService = await ServiceService.createService(serviceData);
      this.services.push(newService);
    } catch (error) {
      console.error("Error creating service:", error);
    }
  }


  async updateService(id, updatedServiceData) {
    try {
      await ServiceService.updateService(id, updatedServiceData);
      const index = this.services.findIndex(service => service.id === id);
      if (index !== -1) {
        this.services[index] = { ...this.services[index], ...updatedServiceData };
      }
    } catch (error) {
      console.error(`Error updating service with id ${id}:`, error);
    }
  }
}

export default ServiceStore;
