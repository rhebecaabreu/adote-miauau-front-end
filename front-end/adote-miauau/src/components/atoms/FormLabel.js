import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primary.label};
`;

const FormLabel = ({ children }) => <StyledLabel>{children}</StyledLabel>;

FormLabel.defaultProps = {
  children: undefined,
};

FormLabel.propTypes = {
  children: PropTypes.node,
};

export default FormLabel;
