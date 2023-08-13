import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary.main};
  color: #aaa;
  padding: 20px;

  button {
    margin-bottom: 18px;
    font-weight: 500;

    &:first-child {
      margin-top: 10px;
    }
  }

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const Sidebar = () => (
  <Root>
    <Button to="/" color="dark" variant="primary">
      Adoção
    </Button>
    <Button to="/" color="dark" variant="primary">
      Achados
    </Button>
    <Button to="/" color="dark" variant="primary">
      Perdidos
    </Button>
  </Root>
);

export default Sidebar;
