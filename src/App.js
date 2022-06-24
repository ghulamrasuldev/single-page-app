import React from "react";
import "./App.css";
import Home from "./Components/Home"
import Contact  from "./Components/Contact";
import About from "./Components/About";
import { Link, Route, Routes } from "react-router-dom";
import Policy from "./Components/Policy";
import Services from "./Components/Services";
import Error404 from "./Components/Error404";
import Header from "./Components/Header";
import CustomFooter from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path={ "*" } element={<Error404 />} />
      </Routes>
      <CustomFooter />
    </>
  );
};

export default App;
