import React, { useState } from "react";
import Button from "./Button";
import { styled } from "styled-components";

const Root = styled.div`
  margin-bottom: 16px;
`;

const FormButtonGroup = ({
  buttons,
  name,
  onChange,
  color = "primary",
  variant = "default",
}) => {
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
          color={color}
          variant={variant}
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
