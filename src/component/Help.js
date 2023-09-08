import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const Help = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handlesearch = () => {
    window.location.href = "https://www.google.com";
  };
  return (
    <div className="help">
      <nav className="navbar">
        <div className="nav-container">
          <div
            style={{
              textShadow: "1.5px 1.5px pink",
              fontFamily: "sans-serif",
              fontSize: "30px",
              fontWeight: "50px",
            }}
          >
            MovieApp
          </div>
          {/* <button className="navbar-toggler" onClick={toggleNav}>
            <span className={`navbar-icon ${isNavOpen ? "open" : ""}`} />
          </button> */}
          <MenuIcon className="navbar-toggler" onClick={toggleNav} />
          <ul className={`navbar-menu ${isNavOpen ? "open" : ""}`}>
            <li className="nav-item">
              <Link to="/React-Project/Main">Back to Main Page</Link>
            </li>
            <li className="nav-item">
              <Link to="/React-Project/Frontend">Movie Manager</Link>
            </li>
            <li className="nav-item">
              <Link to="/React-Project/MovieList">Search Movies</Link>
            </li>
            <li className="nav-item">
              <Link to="/React-Project/Feedback">Feedback</Link>
            </li>
            <li className="nav-item">
              <Link to="/React-Project/Logout">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>

      <h1 style={{ marginLeft: "20px", color: "white" }}>Need Help ?</h1>
      <h4 style={{ marginLeft: "20px", color: "white" }}>
        {" "}
        Since we can't help you, you can search your doubts from Google by
        clicking on the button below.
      </h4>
      <button
        style={{
          backgroundColor: "white",
          marginLeft: "20px",
          color: "black",
        }}
        onClick={() => handlesearch()}
      >
        Click Here
      </button>
    </div>
  );
};
export default Help;
