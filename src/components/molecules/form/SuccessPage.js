import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Cat from "../../../assets/Cat.svg";

const Root = styled.div`
  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const Image = styled.div`
  display: flex;
  width: 500px;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: auto;
  background-repeat: no-repeat;
  height: 100%;
`;

const SuccessPage = () => (
  <Root>
    <h1>Publicação recebida!</h1>
    <p>
      Nossa equipe irá analisar a publicaçãao e em até 1 dia útil estará
      disponível
    </p>
    <Image image={Cat}></Image>
  </Root>
);

export default SuccessPage;
