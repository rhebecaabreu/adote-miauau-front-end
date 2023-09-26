import React from "react";
import { ToastContainer } from "react-toast";

import ThemeProvider from "styles/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";
import Routes from "routes";
import Navbar from "./components/organisms/Navbar";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Navbar />
      <Routes />
      <ToastContainer delay={3000} position="top-right" />
    </ThemeProvider>
  );
}

export default App;
