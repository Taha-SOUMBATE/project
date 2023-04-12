import { Routes, Route } from "react-router-loading";
import { BrowserRouter } from "react-router-dom";
import "./components/dark-mode.css";
import "./components/light-mode.css";
import Questionner from "./components/Questionner";
import SharedLayout from "./components/SharedLayout";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import React from "react";
// import { RingLoader } from "react-spinners";
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes maxLoadingTime={1500}>
          <Route path="/" element={<SharedLayout />} loading>
            <Route index element={<Home />} loading />
            <Route path="about" element={<About />} loading />
            <Route path="projects" element={<Projects />} loading />
            <Route path="contact" element={<Contact />} loading />
            <Route path="questionner" element={<Questionner />} loading />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <div className="d-flex justify-content-center align-items-center vh-100">
        <RingLoader color="#1A6AA2" size={150} />
      </div> */}
    </React.StrictMode>
  );
}

export default App;
