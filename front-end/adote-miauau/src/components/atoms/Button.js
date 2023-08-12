import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const ButtonColors = {
  default: "default",
  primary: "primary",
  dark: "dark",
};

export const ButtonsVariants = {
  default: "default",
  primary: "primary",
  link: "link",
};

const getMainColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.dark:
      return theme.colors.primary.dark;
    default:
      return theme.colors.primary.light;
  }
};

const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.danger:
      return theme.colors.light.dark;
    default:
      return "#5a6268";
  }
};

const getColorText = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.light;
    case ButtonColors.dark:
      return theme.colors.primary.light;
    default:
      return theme.colors.primary.textDark;
  }
};

const getDefaultText = (props) => {
  if (props.color === ButtonColors.default) {
    return "rgba(0, 0, 0, 0.5)";
  }

  return getMainColor(props);
};

const getLinkText = (props) => {
  if (props.color === ButtonColors.default) {
    return "#757575";
  }

  return getMainColor(props);
};

const Button = styled.button`
  font-size: 1rem;
  font-weight: 400;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: none;
  color: ${getColorText};
  display: inline-block;
  text-decoration: none;
  border-radius: 30px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${getDarkColor};
    border-color: ${getDarkColor};
  }
`;

const ButtonDefault = styled(Button)`
  background-color: transparent;
  color: ${getDefaultText};

  &:hover:not(:disabled) {
    background-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonLink = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkText};
  padding-left: 0;
  padding-right: 0;

  &:hover:not(:disabled) {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonWrapper = (props) => {
  switch (props.variant) {
    case ButtonsVariants.primary:
      return <Button {...props} />;
    case ButtonsVariants.link:
      return <ButtonLink {...props} />;
    default:
      return <ButtonDefault {...props} />;
  }
};

ButtonWrapper.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  variant: PropTypes.oneOf(Object.values(ButtonsVariants)),
};

export default ButtonWrapper;