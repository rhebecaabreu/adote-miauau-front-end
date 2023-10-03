import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const light = {
  colors: {
    primary: {
      main: "#5669CC",
      dark: "#555CB3",
      hover: "#4B52A4",
      light: "#F7F5FA",
      text: "#252525",
      textDark: "rgba(0, 0, 0, 0.5)",
      label: "#545454",
    },
    border: "#CECECE",
    danger: "#FF5757",
    pink: "#F8AED3",
    lightGray: "#ECECEC",
  },
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={light}>{children}</StyledProvider>
);

export default ThemeProvider;
