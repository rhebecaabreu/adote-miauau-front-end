import React from "react";

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
    </ThemeProvider>
  );
}

export default App;
