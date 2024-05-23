import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddServiceModal = ({ show, onHide, onSubmit }) => {
  const [newService, setNewService] = useState({
    name: "",
    cost: "",
    descriptions: "",
    idTypeServices: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({
      ...prevService,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newService);
    setNewService({
      name: "",
      cost: "",
      descriptions: "",
      idTypeServices: "",
      image: ""
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить услугу</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formServiceName">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newService.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formServiceCost">
            <Form.Label>Цена</Form.Label>
            <Form.Control
              type="number"
              name="cost"
              value={newService.cost}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formServiceDescriptions">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              type="text"
              name="descriptions"
              value={newService.descriptions}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formServiceIdTypeServices">
            <Form.Label>ID Типа услуги</Form.Label>
            <Form.Control
              type="number"
              name="idTypeServices"
              value={newService.idTypeServices}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formServiceImage">
            <Form.Label>Картинка</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={newService.image}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Добавить услугу
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddServiceModal;
