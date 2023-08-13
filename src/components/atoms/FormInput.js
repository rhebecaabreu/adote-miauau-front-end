import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary.label};
  background: ${(props) => props.theme.colors.lightGray};
  border-radius: 10px;
  border: none;
  height: 40px;
  width: 100%;
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  padding: 4px 6px;
`;

const FormInput = ({ value, placeholder, type, name, onChange }) => {
  return (
    <StyledInput
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

FormInput.defaultProps = {
  children: undefined,
};

FormInput.propTypes = {
  children: PropTypes.node,
};

export default FormInput;
