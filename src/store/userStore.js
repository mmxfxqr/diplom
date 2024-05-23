  import { makeAutoObservable } from "mobx";
  import AuthService from "../services/Auth/AuthService";

  export default class UserStore {
    userId = null;
    userType = null;
    user = null;
    isLoading = true;

    constructor() {
      makeAutoObservable(this);
      this.loadUserFromLocalStorage();
    }

    setUserId(id) {
      this.userId = id;
      localStorage.setItem("userId", id);
    }

    setUserType(type) {
      this.userType = type;
      localStorage.setItem("userType", type);
    }

    setUser(user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    }

    setIsLoading(loading) {
      this.isLoading = loading;
    }
    getUserId() {
      return this.userId;
    }
    async getUserPhone() {
    try {
      if (!this.user) {
        throw new Error("Пользователь не аутентифицирован");
      }

      const phone = this.user.phone;

      if (!phone) {
        throw new Error("Телефон пользователя не найден");
      }

      return phone;
    } catch (error) {
      console.error(
        "Ошибка при получении номера телефона пользователя:",
        error
      );
      throw error;
    }
  }

    async login(login, password) {
      try {
        const response = await AuthService.login(login, password);
        this.setUserId(response.id);
        this.setUserType(response.idTypeUser);
        const userInfo = await AuthService.getUserInfo(response.id);
        if (userInfo) {
          this.setUser(userInfo);
          console.log("User data loaded successfully", userInfo);
        }
        console.log("Login successful", response);
      } catch (e) {
        console.error("Login failed", e);
        throw e;
      }
    }

    async register(user) {
      try {
        const response = await AuthService.register(user);
        if (response && response.id) {
          this.setUserId(response.id);
          this.setUserType(2);
          const userInfo = await AuthService.getUserInfo(response.id); // Получаем информацию о пользователе
          if (userInfo) {
            this.setUser(userInfo); // Обновляем данные пользователя в хранилище
          }
          console.log("Registration successful", response);
        } else {
          throw new Error("Invalid registration response");
        }
      } catch (error) {
        console.error("Registration failed", error);
        throw error;
      }
    }

    loadUserFromLocalStorage() {
      const storedUserId = localStorage.getItem("userId");
      const storedUserType = localStorage.getItem("userType");
      const storedUser = localStorage.getItem("user");

      if (storedUserId) {
        this.userId = storedUserId;
      }

      if (storedUserType) {
        this.userType = parseInt(storedUserType, 10);
      }

      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }

      this.isLoading = false;
    }
  }
