import React, { useState } from "react";
import Button from "./Button";
import { styled } from "styled-components";

const Root = styled.div`
  margin-bottom: 16px;

  button {
    text-transform: lowercase;
  }
`;

const FormButtonGroup = ({ buttons, name, onChange }) => {
  const [active, setActive] = useState(0);

  const handleClick = (event, id) => {
    setActive(id);
    onChange(event);
  };

  return (
    <Root>
      {buttons.map((button, i) => (
        <Button
          type="button"
          clicked={`${active === i}`}
          key={button.name}
          name={name}
          value={button.id}
          onClick={(event) => handleClick(event, i)}
        >
          {button.name}
        </Button>
      ))}
    </Root>
  );
};

export default FormButtonGroup;
