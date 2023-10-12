import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Grid from "components/atoms/Grid";
import Sidebar from "../organisms/Sidebar";
import PetsGrid from "components/organisms/PetsGrid";
import api from "services/api";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  height: 85vh;
`;

const HomeGrid = styled(Grid)`
  height: 100%;
`;

const Home = () => {
  const [pets, setPets] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get("/categories")
      .then((response) => {
        console.log(response);
        setCategories(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Root>
      <HomeGrid md={1} proportion={"1fr 6fr"}>
        <Sidebar categories={categories} setPets={setPets}></Sidebar>
        <PetsGrid pets={pets}></PetsGrid>
      </HomeGrid>
    </Root>
  );
};

export default Home;
