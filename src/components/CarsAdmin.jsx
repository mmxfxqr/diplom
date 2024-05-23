import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Container, Table, Modal } from "react-bootstrap";
import { Context } from "../main";
import CarService from "../services/Cars/CarService";
import AddCarModal from "./addCarModal";
import EditCarModal from "./editCarModal";
import AdminHeader from "./AdminHeader";

const CarsAdmin = observer(() => {
  const { carStore } = useContext(Context);
  const [editingCar, setEditingCar] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    carStore.getCars();
  }, [carStore]);
  if (localStorage.getItem("userType") === "2") {
    return null; // Возвращаем null, если тип пользователя равен 2
  }
  const handleDeleteCar = async (id) => {
    try {
      await CarService.deleteCar(id);
      carStore.getCars();
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const handleEditCar = (car) => {
    setEditingCar(car);
    setShowEditModal(true); // Открываем модалку редактирования
  };

  const handleCancelEdit = () => {
    setEditingCar(null);
    setShowEditModal(false); // Закрываем модалку редактирования
  };

  const handleAddCar = () => {
    setShowAddModal(true); // Открываем модалку добавления
  };

  const handleCloseModals = () => {
    setShowAddModal(false);
    setShowEditModal(false);
  };

  return (
    <div>
      <AdminHeader />
      <Container>
        <h1>Учет машин</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Название</th>
              <th>Модель</th>
              <th>Цвет</th>
              <th>Номер</th>
              <th>ВИН</th>
              <th>События</th>
            </tr>
          </thead>
          <tbody>
            {carStore.cars &&
              carStore.cars.map((car) => (
                <tr key={car.id}>
                  <td>{car.name}</td>
                  <td>{car.model}</td>
                  <td>{car.color}</td>
                  <td>{car.number}</td>
                  <td>{car.vin}</td>
                  <td>
                    <Button variant="info" onClick={() => handleEditCar(car)}>
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteCar(car.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <Button variant="success" onClick={handleAddCar}>
          Add Car
        </Button>

        {/* Модалка для добавления автомобиля */}
        <AddCarModal
          show={showAddModal}
          onClose={handleCloseModals}
          onSuccess={() => {
            carStore.getCars();
            setShowAddModal(false);
          }}
        />

        {/* Модалка для редактирования автомобиля */}
        {editingCar && (
          <EditCarModal
            show={showEditModal}
            onClose={handleCancelEdit}
            onSuccess={() => {
              carStore.getCars();
              setShowEditModal(false);
            }}
            car={editingCar}
          />
        )}
      </Container>
    </div>
  );
});

export default CarsAdmin;
