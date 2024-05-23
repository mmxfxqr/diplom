import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Table, Button, Container } from "react-bootstrap";
import AdminHeader from "./AdminHeader";
import { Context } from "../main";

const CarRequest = observer(() => {
  const { carStore } = useContext(Context);
  if (localStorage.getItem("userType") === "2") {
    return null; 
  }
  useEffect(() => {
    carStore.getOrdersCars(); 
  }, [carStore]);

  const handleDelete = async (id) => {
    await carStore.deleteOrder(id);
  };

  return (
    <div>
      <AdminHeader />
      <Container>
        <h1>Запрос на покупку машины</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID Продажи Автомобиля</th>
              <th>Пользовательское ID</th>
              <th>События</th>
            </tr>
          </thead>
          <tbody>
            {carStore.ordersCars.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.idCarSales}</td>
                <td>{order.idUsers}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(order.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
});

export default CarRequest;
