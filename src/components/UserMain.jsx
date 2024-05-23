import React from "react";
import Header from "./Header";
import { observer } from "mobx-react-lite";
import "../styles/UserMain.css";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";

const UserMain = () => {
  return (
    <div>
      <Header />
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block imgSlider w-100"
            src="https://sun9-51.userapi.com/impf/S-7GwSULIr_y1n4zdjwPhiAJfPfVa0wUCOCENw/yEDmcPcsgxw.jpg?size=1818x606&quality=95&crop=248,0,1200,400&sign=69760dce07127f8ae84b74b7eed47a13&type=cover_group"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block imgSlider w-100"
            src="https://техно-экспорт.рф/img/servis3.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block imgSlider w-100"
            src="https://carsmotion.ru/wp-content/uploads/2022/03/remont_inomarok.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <section className="about-us">
        <div className="container">
          <div className="about-us-content">
            <h2 className="tittleAbout">О нас</h2>
            <p>
              Мы - Auto Repair, ваш надежный партнер в мире авторемонта. Наша
              компания основана на принципах качества, надежности и
              профессионализма. С нашей помощью вы можете получить качественный
              ремонт вашего автомобиля в кратчайшие сроки и по доступной цене.
            </p>
            <p>
              Наш адрес: ул. 8-й Лог, д. 53, г. Курск
              <br />
              Телефон: +7 (919) 210-05-05
              <br />
              График работы: Каждый день: с 10:00 до 20:00.
            </p>
            <p>
              Мы предлагаем широкий спектр услуг, включая техническое
              обслуживание, ремонт двигателя, трансмиссии, тормозной системы,
              электрических систем и многое другое. Наши профессиональные
              механики обеспечат вас высококачественным обслуживанием и ремонтом
              вашего автомобиля.
            </p>
            <p>
              Мы стремимся к вашему полному удовлетворению и гарантируем вам
              безупречное обслуживание. Обращайтесь к нам сегодня и доверьте нам
              заботу о вашем автомобиле!
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default observer(UserMain);
