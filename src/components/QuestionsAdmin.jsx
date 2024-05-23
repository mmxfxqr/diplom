import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Container, Table, Button } from "react-bootstrap";
import { Context } from "../main";
import AppealsService from "../services/Apeal/ApealService";
import AdminHeader from "./AdminHeader";

const QuestionsAdmin = observer(() => {
  const { userStore } = useContext(Context);
  const [appeals, setAppeals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppeals();
  }, []);

  const fetchAppeals = async () => {
    try {
      const data = await AppealsService.getAppeals();
      setAppeals(data);
    } catch (error) {
      console.error("Error fetching appeals:", error);
      setError(error);
    }
  };

  const handleDeleteAppeal = async (id) => {
    try {
      await AppealsService.deleteAppeal(id);
      fetchAppeals();
    } catch (error) {
      console.error("Error deleting appeal:", error);
    }
  };

  return (
    <div>
      <AdminHeader />
      <Container>
        <h1>Служба поддержки</h1>
        {error && <div>Error: {error.message}</div>}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Заголовок</th>
              <th>Суть</th>
              <th>ID Пользователя</th> {/* Добавляем столбец для отображения ID пользователя */}
              <th>События</th>
            </tr>
          </thead>
          <tbody>
            {appeals.map((appeal, index) => (
              <tr key={appeal.id}>
                <td>{index + 1}</td>
                <td>{appeal.title}</td>
                <td>{appeal.body}</td>
                <td>{appeal.idUser}</td> {/* Отображаем значение idUser */}
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteAppeal(appeal.id)}
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

export default QuestionsAdmin;
