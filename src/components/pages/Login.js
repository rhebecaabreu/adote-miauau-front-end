import React, { useState } from "react";
import styled from "styled-components";
import Grid from "components/atoms/Grid";
import MotherPet from "../../assets/MotherPet.svg";
import api from "services/api";
import FormLabel from "components/atoms/FormLabel";
import FormInput from "components/atoms/FormInput";
import Button from "components/atoms/Button";
import Cookies from "js-cookie";

const Image = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const GridFill = styled(Grid)`
  flex: 1 1 auto;
  max-height: 100%;
`;

const LoginForm = styled.div`
  padding: 20px 40px;

  h1 {
    color: ${(props) => props.theme.colors.primary.label};
  }
`;

const PublishPet = () => {
  const [user, setUser] = useState({
    email: "rhebecaabreu@gmail.com",
    password: "secret123",
  });

  const signIn = () => {
    api
      .post("/users/sign_in", user)
      .then((response) => {
        Cookies.set("email", response.data.email);
        Cookies.set("authentication_token", response.data.authentication_token);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Root>
      <GridFill md={2} proportion={"1fr"}>
        <LoginForm>
          <h1>Entrar</h1>
          <FormLabel>E-mail</FormLabel>
          <FormInput
            type="text"
            value={user.email}
            placeholder=""
            name="email"
            onChange={handleChange}
          ></FormInput>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            value={user.password}
            placeholder=""
            name="password"
            onChange={handleChange}
          ></FormInput>
          <Button type="submit" onClick={signIn} color="dark" variant="primary">
            Entrar
          </Button>
        </LoginForm>
        <Image image={MotherPet} />
      </GridFill>
    </Root>
  );
};

export default PublishPet;
