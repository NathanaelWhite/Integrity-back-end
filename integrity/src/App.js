import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Main />
        <Login />
      </>
    </BrowserRouter>
  );
}

export default App;
