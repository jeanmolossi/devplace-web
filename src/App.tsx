import React from "react";

import GlobalStyles from "./assets/globalStyle";
import Routes from "./routes";

function App() {
  return (
    <div id="root-app">
      <Routes />
      <GlobalStyles />
    </div>
  );
}

export default App;
