import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const light = {
  colors: {
    primary: {
      main: "#5669CC",
      dark: "#555CB3",
      light: "#F7F5FA",
      text: "#252525",
      textDark: "rgba(0, 0, 0, 0.5)",
    },
    border: "#CECECE",
  },
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={light}>{children}</StyledProvider>
);

export default ThemeProvider;
