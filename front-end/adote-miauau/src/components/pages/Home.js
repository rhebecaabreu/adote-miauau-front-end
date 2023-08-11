import React from "react";
import Navbar from "../organisms/Navbar";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const teste = "ola";

  console.log(teste);

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
      <p>body</p>
    </>
  );
};

export default Home;
