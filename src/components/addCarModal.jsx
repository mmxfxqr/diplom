import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import CarService from '../services/Cars/CarService';

const AddCarModal = ({ show, onClose, onSuccess }) => {
  const [carData, setCarData] = useState({
    name: '',
    model: '',
    color: '',
    number: '',
    vin: '',
    image: '', // Добавляем поле для URL изображения
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CarService.createCar(carData);
      onSuccess(); // Обновляем список автомобилей после успешного добавления
      onClose(); // Закрываем модалку
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить Машину</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Название</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={carData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="model">
            <Form.Label>Модель</Form.Label>
            <Form.Control
              type="text"
              name="model"
              value={carData.model}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="color">
            <Form.Label>Цвет</Form.Label>
            <Form.Control
              type="text"
              name="color"
              value={carData.color}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="number">
            <Form.Label>Номер</Form.Label>
            <Form.Control
              type="text"
              name="number"
              value={carData.number}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="vin">
            <Form.Label>ВИН</Form.Label>
            <Form.Control
              type="text"
              name="vin"
              value={carData.vin}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Картинка URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={carData.image}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit" style={{ float: 'right', marginTop: '10px' }}>
            Добавить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddCarModal;
