import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "../components/pages/Home";
import PublishPet from "../components/pages/PublishPet";
import Login from "../components/pages/Login";

const AppRoutes = () => {
  const auth = Cookies.get("authentication_token");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/publicar"
        element={
          auth ? <PublishPet /> : <Navigate to={{ pathname: "/entrar" }} />
        }
      />
      <Route
        path="/entrar"
        element={auth ? <Navigate to={{ pathname: "/" }} /> : <Login />}
      />
      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
};

export default AppRoutes;
