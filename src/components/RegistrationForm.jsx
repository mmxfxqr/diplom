import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Form, Button } from "react-bootstrap";
import { Context } from "../main";
import s from "../styles/Login.module.css";

const RegistrationForm = () => {
    const { userStore } = useContext(Context);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        await userStore.register({ name, email, phone, address, login, password });
        navigate('/main')
    };

    return (
        <div className={s.mainFormContainer}>
            <Form className={s.mainForm} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Почта</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Адрес</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLogin">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <div className={s.formFooter}>
                    <div className="mt-3">
                        <Link to="/" className={s.linkLogin}>
                            Уже есть аккаунт?
                        </Link>
                    </div>
                    <Button variant="success" type="submit" className={s.submitBtn}>
                        Регистрация
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default observer(RegistrationForm);
