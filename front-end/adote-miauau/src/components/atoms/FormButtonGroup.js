import React, { useState } from "react";
import Button from "./Button";
import { styled } from "styled-components";

const Root = styled.div`
  margin-bottom: 16px;
`;

const FormButtonGroup = ({ buttons, onChange }) => {
  const [active, setActive] = useState(0);

  const handleClick = (event, id) => {
    setActive(id);
    onChange(event);
  };

  return (
    <Root>
      {buttons.map((buttonLabel, i) => (
        <Button
          type="button"
          key={i}
          clicked={active === i}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
        >
          {buttonLabel}
        </Button>
      ))}
    </Root>
  );
};

export default FormButtonGroup;
