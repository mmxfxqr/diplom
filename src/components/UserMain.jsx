import React from "react";
import Header from "./Header";
import { observer } from "mobx-react-lite";
import "../styles/UserMain.css";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import svg1 from "../assets/mechanic-svgrepo-com.svg";
import svg2 from "../assets/percent-svgrepo-com.svg";
import svg3 from "../assets/sand-clock-svgrepo-com.svg";
import svg4 from "../assets/wallet-svgrepo-com.svg";
import car from "../assets/audi-rs5-spor-panjur.jpg";
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
            src="https://blogs.gestion.pe/innovar-o-ser-cambiado/wp-content/uploads/sites/113/2015/06/GL-ColorTiles.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <section className="section">
        <Container className="sectionCon">
          <div className="itemSec">
            <img src={svg4}></img>
            <div className="h3">Честные цены на обслуживание</div>
            <div className="pSec">
              Стоймость услуг обговаривается по телефону и личной встрече
            </div>
          </div>
          <div className="itemSec">
            <img src={svg2}></img>
            <div className="h3">100% гарантия результата</div>
            <div className="pSec">
              АвтоМАСТЕР Курск предоставляет гарантию на каждую запчасть.
            </div>
          </div>
          <div className="itemSec">
            <img src={svg3}></img>
            <div className="h3">Экономия вашего времени</div>
            <div className="pSec">
              Обслуживаем клиентов по удобному для вас графику с 10:00 до 20 :00
            </div>
          </div>
          <div className="itemSec">
            <img src={svg1}></img>
            <div className="h3">Вежливый и приятный персонал</div>
            <div className="pSec">
              Мы помогаем нашим клиентам с решением их проблем!
            </div>
          </div>
        </Container>
      </section>
      <section className="stageSec">
        <h1>ЭТАПЫ РАБОТЫ</h1>
        <Container className="stageCon">
          <img src={car} className="imgCar"></img>
          <div className="stageText">
            <div className="stageItem">1. Вы оставляете заявку на сайте или звоните нам</div>
            <div className="stageItem">
              2. Мы согласовывем время, вы приезжаете и рассказываете все что
              беспокоит вас в автомобиле
            </div>
            <div className="stageItem">3. Мы проводим диагностику и определяем проблемные места</div>
            <div className="stageItem">4. Мы составляем смету, определяем сроки выполнения работ</div>
            <div className="stageItem">5. Мы выполняем работы</div>
            <div className="stageItem">6. Вы принимаете работу, наш мастер показывает что было сделано и по желанию вы можете забрать старые детали</div>
            <div className="stageItem">7. Мы передаем вам отремонтированный автомобиль</div>
          </div>
        </Container>
      </section>
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

      <Footer />
    </div>
  );
};

export default observer(UserMain);
