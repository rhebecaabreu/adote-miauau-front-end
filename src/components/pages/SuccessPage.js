import React from "react";
import styled from "styled-components";
import Cat from "../../assets/Cat.svg";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const Image = styled.div`
  width: 100%;
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
      Nossa equipe irá analisar a publicação e em até 1 dia útil estará
      disponível.
    </p>
    <Image image={Cat}></Image>
  </Root>
);

export default SuccessPage;
