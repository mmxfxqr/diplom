import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import s from "../styles/Header.module.css";
import logo from "../assets/logo.svg";

const AdminHeader = () => {
  const { userStore } = useContext(Context);

  // Проверяем роль пользователя из localStorage
  const userType = localStorage.getItem("userType");

  // Если роль пользователя - администратор, показываем навигацию
  if (userType === "1") {
    return (
      <Navbar bg="dark" data-bs-theme="dark" className={`${s.navBar} mb-5`}>
        <Container className={s.navContainer}>
          <Navbar.Brand className={s.logo}>
            <Link to="/main" className={s.brandLink}>
              <img src={logo} className={s.logoImg} alt="Logo" />
              ADMIN-PANEL
            </Link>
          </Navbar.Brand>
          <Nav className={`mx-auto ${s.navLinks}`}>
            <Link to="/carsAdmin">Машины</Link>
            <Link to="/servicesAdmin">Услуги</Link>
            <Link to="/questionsAdmin">Вопросы</Link>
            <Link to="/carRequest">Заявки на авто</Link>
            <Link to="/serviceRequest">Заявки на услуги</Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Зарегистрирован: <Link to="/">{userStore.user.email}</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    // Если пользователь не является администратором, возвращаем null
    return null;
  }
};

export default observer(AdminHeader);
