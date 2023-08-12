import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary.label};
  background: ${(props) => props.theme.colors.lightGray};
  border-radius: 10px;
  border: none;
  height: 80px;
  width: 100%;
  margin-bottom: 30px;
`;

const FormTextArea = ({ value, placeholder, name, onChange }) => {
  return (
    <StyledTextArea
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

FormTextArea.defaultProps = {
  children: undefined,
};

FormTextArea.propTypes = {
  children: PropTypes.node,
};

export default FormTextArea;
