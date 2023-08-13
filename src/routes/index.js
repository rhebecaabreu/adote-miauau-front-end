import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import PublishPet from "../components/pages/PublishPet";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/sobre" element={<About />} /> */}
    <Route path="/publicar" element={<PublishPet />} />
    {/* <Route path="*" element={<Error404 />} /> */}
  </Routes>
);

export default AppRoutes;
