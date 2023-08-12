import React from "react";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 100%;
    color: #212121;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;

    .root {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100vh;

    }
  }

  a, button {
    font-family: "Poppins", sans-serif;
  }

  h1, h2, h3, h5, h6 {
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: 2px;

    strong {
      color: ${(props) => props.theme.colors.primary.main};
    }
  }
`;

const GlobalStyleComposed = () => (
  <>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
);

export default GlobalStyleComposed;
