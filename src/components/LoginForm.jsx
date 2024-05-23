import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Form, Button } from 'react-bootstrap';
import { Context } from '../main';
import s from '../styles/Login.module.css';

const LoginForm = () => {
  const { userStore } = useContext(Context);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!login || !password) {
      setError("Please enter both login and password");
      return;
    }
    try {
      setError(null);
      await userStore.login(login, password); 
      navigate("/main");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
};


  return (
    <div className={s.mainFormContainer}>
      <Form className={s.mainForm} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
        {error && <div className="text-danger">{error}</div>}{' '}
        {/* Отображаем сообщение об ошибке, если есть */}
        <div className={s.formFooter}>
          <div className="mt-3">
            <Link to="/registration" className={s.linkLogin}>
              У вас уже есть аккаунт?
            </Link>
          </div>
          <Button variant="success" type="submit" className={s.submitBtn}>
            Войти
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default observer(LoginForm);
