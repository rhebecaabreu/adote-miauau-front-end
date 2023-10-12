import React, { useState } from "react";
import Button from "./Button";
import { styled } from "styled-components";
import { ReactSVG } from "react-svg";

const Root = styled.div`
  margin-bottom: 16px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  svg {
    margin-right: 8px;
    vertical-align: middle;
    pointer-events: none;
  }
`;

const FormButtonGroup = ({
  buttons,
  name,
  onChange,
  variant = "default",
  icon = "",
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
          variant={variant}
          key={button.name}
          name={name}
          value={button.id}
          onClick={(event) => handleClick(event, i)}
        >
          <Content>
            {icon && <ReactSVG src={icon} />}
            {button.name}
          </Content>
        </Button>
      ))}
    </Root>
  );
};

export default FormButtonGroup;
