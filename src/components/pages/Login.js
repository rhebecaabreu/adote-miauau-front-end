import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Grid from "components/atoms/Grid";
import MotherPet from "../../assets/MotherPet.svg";
import FormLabel from "components/atoms/FormLabel";
import FormInput from "components/atoms/FormInput";
import Button from "components/atoms/Button";
import useSignIn from "resources/user";

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
  const [user, setUser] = useState();
  const { data, signIn } = useSignIn();

  useEffect(() => {
    if (data.email) {
      window.location = "/";
    }
  }, [data]);

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
            placeholder=""
            name="email"
            onChange={handleChange}
          ></FormInput>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            placeholder=""
            name="password"
            onChange={handleChange}
          ></FormInput>
          <Button
            type="submit"
            onClick={() => signIn(user)}
            color="dark"
            variant="primary"
          >
            Entrar
          </Button>
        </LoginForm>
        <Image image={MotherPet} />
      </GridFill>
    </Root>
  );
};

export default PublishPet;
