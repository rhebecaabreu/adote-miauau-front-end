import React, { useState } from "react";
import styled from "styled-components";
import Grid from "components/atoms/Grid";
import Sidebar from "../organisms/Sidebar";
import PetsGrid from "components/organisms/PetsGrid";

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

  return (
    <Root>
      <HomeGrid md={1} proportion={"1fr 6fr"}>
        <Sidebar setPets={setPets}></Sidebar>
        <PetsGrid pets={pets}></PetsGrid>
      </HomeGrid>
    </Root>
  );
};

export default Home;
