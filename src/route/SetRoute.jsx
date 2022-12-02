import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../component/About";
import Contact from "../component/Contact";
import ErrorPage from "../component/ErrorPage";
import Home from "../component/Home";

function SetRoute() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default SetRoute;
