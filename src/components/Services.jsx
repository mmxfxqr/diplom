import React, { useEffect, useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import Header from "./Header";
import { Context } from "../main";
import { Card, Button, Container } from "react-bootstrap";
import s from "../styles/Service.module.css";
import Footer from "./Footer";

const Services = observer(() => {
  const { serviceStore } = useContext(Context);
  const [orderSuccess, setOrderSuccess] = useState({});

  useEffect(() => {
    serviceStore.getServices();
  }, [serviceStore]);

  const handleOrderClick = async (idService) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User not logged in");
      return;
    }

    try {
      await serviceStore.createOrder(idService, userId);
      setOrderSuccess((prev) => ({ ...prev, [idService]: true }));
      setTimeout(() => {
        setOrderSuccess((prev) => ({ ...prev, [idService]: false }));
      }, 3000);
    } catch (error) {
      console.error("Error creating order:", error);
      setOrderSuccess((prev) => ({ ...prev, [idService]: false }));
    }
  };

  return (
    <div>
      <Header />
      <Container className={s.tittleBlock}>
        <h1 className={s.title}>Услуги</h1>
        <p className={s.description}>
          Компания Auto-Repair-Shop предоставляет высококачественные услуги по
          починке автомобилей. Мы работаем ежедневно с 9:00 до 18:00. Наши
          специалисты обладают многолетним опытом и готовы помочь вам в любое
          время. Наш автосервис находится по адресу: ул. Примерная, д. 10, г.
          Москва.
        </p>
      </Container>
      <Container className="mt-4">
        <div className={s.cardContainer}>
          {serviceStore.services.map((service) => (
            <Card key={service.id} className={s.card}>
              <Card.Img
                variant="top"
                src={service.image}
                alt={service.name}
                className={s.cardImg}
              />
              <Card.Body className={s.cardBody}>
                <Card.Title className={s.cardTitle}>{service.name}</Card.Title>
                <Card.Text className={s.cardText}>
                    <strong>Описание:</strong> {service.descriptions}
                    <br />
                    <div className={s.priceContainer}>
                      <strong className={s.priceLabel}>Цена от:</strong>
                      <span className={s.price}>{service.cost} рублей</span>
                    </div>
                </Card.Text>
                <div className={s.buttonContainer}>
                  <Button
                    variant="success"
                    onClick={() => handleOrderClick(service.id)}
                  >
                    Order
                  </Button>
                  {orderSuccess[service.id] && (
                    <div
                      className={`${s.alertSuccess} ${
                        orderSuccess[service.id] ? s.show : ""
                      }`}
                    >
                      Успешно!
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
});

export default Services;
