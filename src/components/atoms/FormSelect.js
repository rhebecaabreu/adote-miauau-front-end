import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSelect = styled.select`
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

  option {
    font-family: "Poppins", sans-serif;
  }
`;

const FormSelect = ({ name, value, options, onChange }) => {
  return (
    <StyledSelect name={name} value={value} onChange={onChange}>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

FormSelect.defaultProps = {
  children: undefined,
};

FormSelect.propTypes = {
  children: PropTypes.node,
};

export default FormSelect;
