import React, { useEffect, useContext, useState } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import Header from "./Header";
import { Card, Button, Container } from "react-bootstrap";
import styles from "../styles/Cars.module.css";
import CarService from "../services/Cars/CarService";
import Footer from "./Footer";

const Cars = observer(() => {
  const { carStore, userStore } = useContext(Context);
  const [orderSuccess, setOrderSuccess] = useState({});

  const handleBuyClick = async (idCarSales) => {
    try {
      const userId = localStorage.getItem("userId");
      console.log(userId);
      console.log(idCarSales);

      const response = await CarService.createOrder(idCarSales, userId);
      console.log(response);
      setOrderSuccess((prev) => ({ ...prev, [idCarSales]: true }));
      setTimeout(() => {
        setOrderSuccess((prev) => ({ ...prev, [idCarSales]: false }));
      }, 3000);
    } catch (error) {
      console.error("Error creating order:", error);
      setOrderSuccess((prev) => ({ ...prev, [idCarSales]: false }));
    }
  };

  useEffect(() => {
    carStore.getCars();
  }, [carStore]);

  return (
    <div>
      <Header />
      <Container className={styles.tittleBlock}>
        <h1 className={styles.title}>Машины на продажу</h1>
        <p className={styles.description}>
          Компания АвтоМАСТЕР представляет вашему вниманию широкий выбор
          автомобилей различных марок и моделей. Мы гарантируем высокое качество
          представленных автомобилей и профессиональное обслуживание. Обращайтесь
          к нам, чтобы выбрать идеальный автомобиль для ваших потребностей!
        </p>
      </Container>
      <Container className="mt-4">
        <div className={styles.cardContainer}>
          {carStore.cars.map((car) => (
            <Card key={car.id} className={styles.card}>
              <Card.Img
                variant="top"
                src={car.image}
                alt={car.name}
                className={styles.cardImg}
              />
              <Card.Body className={styles.cardBody}>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text className={styles.cardText}>
                  <strong>Модель:</strong> {car.model}
                  <br />
                  <strong>Цвет:</strong> {car.color}
                  <br />
                  <strong>Номер:</strong> {car.number}
                  <br />
                  <strong>ВИН:</strong> {car.vin}
                </Card.Text>
                <div className={styles.buttonContainer}>
                  <Button
                    variant="success"
                    onClick={() => handleBuyClick(car.id)}
                  >
                    Купить
                  </Button>
                  {orderSuccess[car.id] && (
                    <div className={styles.alertSuccess}>Заявка отправлена!</div>
                  )}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
      <Footer/>
    </div>
  );
});

export default Cars;
