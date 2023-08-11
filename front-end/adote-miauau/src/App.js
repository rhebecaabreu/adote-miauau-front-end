import React from "react";

import ThemeProvider from "styles/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";
import Routes from "routes";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
