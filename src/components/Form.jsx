import React, { useState, useContext } from "react";
import s from "../styles/Form.module.css";
import AppealsService from "../services/Apeal/ApealService";
import { Context } from "../main";
import Header from "./Header";
import { observer } from "mobx-react-lite";
import Footer from "./Footer";
const Form = () => {
  const { userStore } = useContext(Context);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const appeal = {
      title,
      body,
      idUser: userStore.userId,
    };

    try {
      await AppealsService.createAppeal(appeal);
      setTitle("");
      setBody("");
      setSuccess("Ваш вопрос был успешно отправлен.");
    } catch (err) {
      setError("Произошла ошибка при отправке вопроса.");
    }
  };

  return (
    <div>
      <Header />
      <div className={s.formContainer}>
        <h2>Отправить вопрос</h2>
        {error && <div className={s.error}>{error}</div>}
        {success && <div className={s.success}>{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Заголовок
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Вопрос
            </label>
            <textarea
              className="form-control"
              id="body"
              rows="3"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            Отправить
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};
export default observer (Form);
