import $api from "../../api/Api";

export default class AppealsService {
  static async createAppeal(appeal) {
    try {
      const response = await $api.post("/Appeals", appeal);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getAppeals() {
    try {
      const response = await $api.get("/Appeals");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getUserPhone(userId) {
    try {
      const response = await $api.get(`/Users/${userId}`);
      return response.data.phone; 
    } catch (error) {
      throw error;
    }
  }

  static async deleteAppeal(id) {
    try {
      await $api.delete(`/Appeals/${id}`);
    } catch (error) {
      throw error;
    }
  }
}
