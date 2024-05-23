import React, { useState, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Header from "./Header";
import s from "../styles/Questions.module.css";
import { observer } from "mobx-react-lite";
import AppealsService from "../services/Apeal/ApealService";
import { Context } from "../main";
import Footer from "./Footer";

const Questions = () => {
  return (
    <div className={s.questions}>
      <Header />
      <div className={s.acordeonCon}>
      <h2 className={s.title}>Часто задаваемые вопросы</h2>
        <Accordion defaultActiveKey="0" className={s.acordeon}>
          <Accordion.Item eventKey="0" className={s.acordeonItem}>
            <Accordion.Header>Какие услуги вы предоставляете?</Accordion.Header>
            <Accordion.Body>
              Мы предлагаем широкий спектр услуг по ремонту автомобилей, включая
              замену масла, ремонт тормозов, диагностику двигателя, обслуживание
              трансмиссии, вращение шин и многое другое.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className={s.acordeonItem}>
            <Accordion.Header>Как часто нужно менять масло?</Accordion.Header>
            <Accordion.Body>
              Рекомендуется менять масло каждые 3,000 - 5,000 миль, в
              зависимости от марки и модели вашего автомобиля, а также от ваших
              привычек вождения.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className={s.acordeonItem}>
            <Accordion.Header>
              Вы предоставляете бесплатные оценки?
            </Accordion.Header>
            <Accordion.Body>
              Да, мы предлагаем бесплатные оценки для всех услуг по ремонту и
              техническому обслуживанию. Просто привезите ваш автомобиль, и мы
              предоставим подробную смету.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={s.acordeonItem}>
            <Accordion.Header>Ваши механики сертифицированы?</Accordion.Header>
            <Accordion.Body>
              Все наши механики сертифицированы ASE и имеют большой опыт в
              ремонте и техническому обслуживанию автомобилей.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={s.acordeonItem}>
            <Accordion.Header>
              Вы предоставляете гарантию на свои услуги?
            </Accordion.Header>
            <Accordion.Body>
              Да, мы предоставляем гарантию на все наши услуги. Гарантия зависит
              от типа выполненной работы и используемых запчастей.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={s.acordeonItem}>
            <Accordion.Header>Как записаться на обслуживание?</Accordion.Header>
            <Accordion.Body>
              Вы можете записаться на обслуживание, позвонив нам по телефону или
              заполнив форму на нашем сайте. Мы свяжемся с вами для
              подтверждения удобного времени.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className={s.acordeonItem}>
            <Accordion.Header>Как долго продлится ремонт?</Accordion.Header>
            <Accordion.Body>
              Время ремонта зависит от сложности работы. Мы постараемся
              завершить все работы как можно быстрее, чтобы вы могли вернуться к
              своим делам.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={s.acordeonItem}>
            <Accordion.Header>
              Могу ли я ожидать ремонта на месте?
            </Accordion.Header>
            <Accordion.Body>
              Да, вы можете ожидать ремонта в нашем уютном зале ожидания с
              бесплатным Wi-Fi и напитками. Мы постараемся сделать ваше ожидание
              максимально комфортным.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8" className={s.acordeonItem}>
            <Accordion.Header>
              Вы используете оригинальные запчасти?
            </Accordion.Header>
            <Accordion.Body>
              Мы используем как оригинальные, так и качественные аналоговые
              запчасти, в зависимости от вашего пожелания и доступного бюджета.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9" className={s.acordeonItem}>
            <Accordion.Header>Предоставляете ли вы скидки?</Accordion.Header>
            <Accordion.Body>
              Да, мы предлагаем различные скидки и акции для наших постоянных
              клиентов, а также сезонные предложения. Следите за обновлениями на
              нашем сайте или в социальных сетях.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer/>
    </div>
  );
};

export default observer(Questions);
