import $api from "../../api/Api";

export default class AuthService {
  static async login(login, password) {
    try {
      const response = await $api.post("/AuthUser/Auth", { login, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async register(user) {
    try {
      const response = await $api.post("/Users", user);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getUserInfo(userId) {
    try {
      const response = await $api.get(`/Users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
