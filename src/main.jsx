import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import CarStore from "./store/carStore.js";
import UserStore from "./store/userStore.js";
import ServiceStore from './store/servStore.js'; // Переместили сюда
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const userStore = new UserStore();
const carStore = new CarStore();
const serviceStore = new ServiceStore();

const store = {
  userStore,
  carStore,
  serviceStore,
};

export const Context = React.createContext(store);

createRoot(document.getElementById("root")).render(
  <Context.Provider value={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
