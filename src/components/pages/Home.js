import React, { useState, useEffect } from "react";
import Grid from "components/atoms/Grid";
import Sidebar from "../organisms/Sidebar";
import PetsGrid from "components/organisms/PetsGrid";
import styled from "styled-components";
import api from "services/api";

const Root = styled.section`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/publications")
      .then((response) => setPets(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Root>
      <Grid md={1} proportion={"1fr 6fr"}>
        <Sidebar></Sidebar>
        <PetsGrid pets={pets}></PetsGrid>
      </Grid>
    </Root>
  );
};

export default Home;
