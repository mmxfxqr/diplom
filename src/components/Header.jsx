import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import s from "../styles/Header.module.css";
import logo from "../assets/logo.svg";


const Header = () => {
  const { userStore } = useContext(Context);

  return (
    <Navbar bg="dark" data-bs-theme="dark" className={`${s.navBar}`}>
      <Container className={s.navContainer}>
        <Navbar.Brand className={s.logo}>
          <Link to="/main" className={s.brandLink}>
            <img src={logo} className={s.logoImg} alt="Logo" />
            АвтоМастер
          </Link>
        </Navbar.Brand>
        <Nav className={`mx-auto ${s.navLinks}`}>
          <Link to="/cars">Машины</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/questions">FAQ</Link>
          <Link to="/form">Служба Поддержки</Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Зарегистрирован: <Link to="/">{userStore.user.email}</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default observer(Header);
