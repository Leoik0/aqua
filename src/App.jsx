// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
