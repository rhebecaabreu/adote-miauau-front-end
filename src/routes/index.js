import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import PublishPet from "../components/pages/PublishPet";
import Login from "../components/pages/Login";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/publicar" element={<PublishPet />} />
    <Route path="/entrar" element={<Login />} />
    {/* <Route path="*" element={<Error404 />} /> */}
  </Routes>
);

export default AppRoutes;
