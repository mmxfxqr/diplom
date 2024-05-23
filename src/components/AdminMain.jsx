import React from "react";
import { observer } from "mobx-react-lite";
import AdminHeader from "./AdminHeader";
import { Container } from "react-bootstrap";
import "../styles/AdminMain.css"
const AdminMain = () => {
  return (
    <div>
      <AdminHeader />
      <Container className="admin-main-container">
        <h1 className="admin-panel-text">ADMIN PANEL</h1>
      </Container>
    </div>
  );
};

export default observer(AdminMain);
