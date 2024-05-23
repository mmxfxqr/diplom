import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserStore from "./store/userStore.js";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import MainPage from "./components/MainPage";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Questions from "./components/Questions.jsx";
import { observer } from "mobx-react-lite";
import { createContext } from "react";
import Form from "./components/Form.jsx";
import Services from "./components/Services.jsx";
import Cars from "./components/Cars.jsx";
import CarsAdmin from "./components/CarsAdmin.jsx";
import ServicesAdmin from "./components/ServicesAdmin.jsx";
import QuestionsAdmin from "./components/QuestionsAdmin.jsx";
import CarRequest from "./components/CarRequest.jsx";
import ServiceRequest from "./components/ServiceRequest.jsx";
const userStore = new UserStore();

export const Context = createContext({ userStore });

const App = () => {
  return (
    <Context.Provider value={{ userStore }}>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/form" element={<Form />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/carsAdmin" element={<CarsAdmin />} />
          <Route path="/servicesAdmin" element={<ServicesAdmin />} />
          <Route path="/questionsAdmin" element={<QuestionsAdmin />} />
          <Route path="/carRequest" element={<CarRequest />} />
          <Route path="/serviceRequest" element={<ServiceRequest />} />

        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default observer(App);
