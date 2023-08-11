import React from "react";
import Navbar from "../organisms/Navbar";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";
import Grid from "components/atoms/Grid";
import Sidebar from "../organisms/Sidebar";
import PetsGrid from "components/organisms/PetsGrid";

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
  ];

  return (
    <>
      <Navbar>
        <Button as={Link} to="/" color="default" variant="default">
          Início
        </Button>
        <Button as={Link} to="/sobre" color="default" variant="default">
          Sobre o Miauau
        </Button>
        <Button as={Link} to="/publicar" color="primary" variant="primary">
          Publicar pet
        </Button>
        <Button as={Link} to="/favoritos" color="primary" variant="primary">
          Favoritos
        </Button>
        <Button color="primary" variant="primary">
          Meu perfil
        </Button>
      </Navbar>
      <Grid md={1} proportion={"1fr 6fr"}>
        <Sidebar></Sidebar>
        <PetsGrid pets={pets}></PetsGrid>
      </Grid>
    </>
  );
};

export default Home;
