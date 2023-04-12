import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg shadow-sm p-4">
        <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
          <div className="navbar-brand mb-4 mb-md-0 mb-lg-0">
            <span className=" btn  p-1 fw-bold">Taha SOUMBATE</span>
          </div>
          <div className="memu">
            <NavLink to="/" className="link m-5">
              Home
            </NavLink>
            <NavLink to="/about" className="link m-5">
              About
            </NavLink>
            <NavLink to="/projects" className="link m-5">
              Projects
            </NavLink>
            <NavLink to="/questionner" className="link m-5">
              Questionner
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact" className="link">
              <button className="mt-5 m-lg-0 btn custom-btn fw-bold">Contact me</button>
            </NavLink>
          </div>

          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={darkMode} onChange={toggleMode} />

            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
              {darkMode ? "Dark Mode" : "Light Mode"}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
