import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import React, { useEffect } from "react";
import Home from "./components/pages/Home";
import BitcoinState from "./context/bitcoin/BitcoinState";

const App = () => {
  return (
    <BitcoinState>
      <Home />
    </BitcoinState>
  );
};

export default App;
