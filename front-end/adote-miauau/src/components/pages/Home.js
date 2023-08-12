import React from "react";
import Navbar from "../organisms/Navbar";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";
import Grid from "components/atoms/Grid";
import Sidebar from "../organisms/Sidebar";
import PetsGrid from "components/organisms/PetsGrid";
import styled from "styled-components";

const Root = styled.section`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const pets = [
    {
      id: "1",
      title: "laranjinha a procura de um lar",
      user: {
        name: "ONG Abrigo dos bichos",
      },
      image: "Imagem",
    },
    {
      id: "2",
      title: "laranjinha a procura de um lar",
      user: {
        name: "ONG Abrigo dos bichoss",
      },
      image: "Imagem",
    },
    {
      id: "3",
      title: "laranjinha a procura de um lar",
      user: {
        name: "ONG Abrigo dos bichoss",
      },
      image: "Imagem",
    },
    {
      id: "4",
      title: "laranjinha a procura de um lar",
      user: {
        name: "ONG Abrigo dos bichoss",
      },
      image: "Imagem",
    },
    {
      id: "5",
      title: "laranjinha a procura de um lar",
      user: {
        name: "ONG Abrigo dos bichoss",
      },
      image: "Imagem",
    },
    {
      id: "6",
      title: "laranjinha a procura de um lar",
      user: {
        name: "ONG Abrigo dos bichoss",
      },
      image: "Imagem",
    },
    {
      id: "7",
      title: "laranjinha a procura de um lar",
      user: {
        name: "ONG Abrigo dos bichoss",
      },
      image: "Imagem",
    },
  ];

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
