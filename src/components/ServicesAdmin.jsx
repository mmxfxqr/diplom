import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Table, Button, Container } from "react-bootstrap";
import AdminHeader from "./AdminHeader";
import { Context } from "../main";
import AddServiceModal from "./AddServiceModal";
import EditServiceModal from "./EditServiceModal";

const ServicesAdmin = observer(() => {
  const { serviceStore } = useContext(Context);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editServiceId, setEditServiceId] = useState(null);

  useEffect(() => {
    serviceStore.getServices();
  }, [serviceStore]);

  const handleDelete = async (id) => {
    await serviceStore.deleteService(id);
  };

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleShowEditModal = (id) => {
    setEditServiceId(id);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleAddService = async (newService) => {
    await serviceStore.createService(newService);
    handleCloseAddModal();
  };

  const handleEditService = async (editedService) => {
    await serviceStore.updateService(editedService.id, editedService);
    handleCloseEditModal();
  };

  if (localStorage.getItem("userType") === "2") {
    return null;
  }

  return (
    <div>
      <AdminHeader />
      <Container>
        <AddServiceModal
          show={showAddModal}
          onHide={handleCloseAddModal}
          onSubmit={handleAddService}
        />

        <EditServiceModal
          show={showEditModal}
          onHide={handleCloseEditModal}
          onSubmit={handleEditService}
          service={serviceStore.services.find(
            (service) => service.id === editServiceId
          )}
        />

        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Имя</th>
              <th>Цена</th>
              <th>Описание</th>
              <th>ID Типа услуги</th>
              <th>События</th>
            </tr>
          </thead>
          <tbody>
            {serviceStore.services.map((service, index) => (
              <tr key={service.id}>
                <td>{index + 1}</td>
                <td>{service.name}</td>
                <td>{service.cost}</td>
                <td>{service.descriptions}</td>
                <td>{service.idTypeServices}</td>
                <td>
                  <Button
                    variant="primary"
                    className="mr-2"
                    onClick={() => handleShowEditModal(service.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(service.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button
          variant="success"
          className="float-right mt-3"
          onClick={handleShowAddModal}
        >
          Add Service
        </Button>
      </Container>
    </div>
  );
});

export default ServicesAdmin;
