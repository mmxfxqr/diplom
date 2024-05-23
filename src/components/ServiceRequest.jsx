import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Table, Button, Container } from "react-bootstrap";
import AdminHeader from "./AdminHeader";
import { Context } from "../main";

const ServiceRequest = observer(() => {
  const { serviceStore } = useContext(Context);
  if (localStorage.getItem("userType") === "2") {
    return null;
  }
  useEffect(() => {
    serviceStore.getOrders();
  }, [serviceStore]);

  const handleDelete = async (id) => {
    await serviceStore.deleteOrder(id);
  };

  if (localStorage.getItem("userType") === "2") {
    return null;
  }

  return (
    <div>
      <AdminHeader />
      <Container>
        <h1>Заявки на услуги</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID Услуги</th>
              <th>ID Пользователя</th>
              <th>События</th>
            </tr>
          </thead>
          <tbody>
            {serviceStore.orders.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.idServices}</td>
                <td>{order.idUsers}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(order.id)}
                  >
                    Удалить
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

export default ServiceRequest;
