import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Homepage />
        <Footer />
      </>
    </Router>
  );
}

export default App;
