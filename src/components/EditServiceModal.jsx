import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditServiceModal = ({ show, onHide, onSubmit, service }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    if (service) {
      setName(service.name);
      setCost(service.cost);
      setDescription(service.descriptions);
      setTypeId(service.idTypeServices);
    }
  }, [service]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: service.id,
      name,
      cost: parseInt(cost),
      descriptions: description,
      idTypeServices: parseInt(typeId)
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Сервис Редактирования</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="serviceName">
            <Form.Label>Название</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="serviceCost">
            <Form.Label>Цена</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="serviceDescription">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="serviceTypeId">
            <Form.Label>ID Типа</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter type ID"
              value={typeId}
              onChange={(e) => setTypeId(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Сохранить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditServiceModal;
