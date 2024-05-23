import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import AdminMain from "./AdminMain";
import UserMain from "./UserMain";
import s from "../styles/MainPage.module.css";

const MainPage = () => {
  const { userStore } = useContext(Context);

  useEffect(() => {
    // Выполнить какие-то действия, когда userType изменится
  }, [userStore.userType]);

  if (userStore.isLoading) {
    return <div className={s.mainContainer}>Loading...</div>;
  }

  if (userStore.userType === 1) {
    return <AdminMain />;
  } else if (userStore.userType === 2) {
    return <UserMain />;
  } else {
    return <div className={s.mainContainer}>Loading...</div>;
  }
};

export default observer(MainPage);