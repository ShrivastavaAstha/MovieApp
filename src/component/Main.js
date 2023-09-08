import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";

import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HelpIcon from "@mui/icons-material/Help";

const Main = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const location = useLocation();

  const soundfn = () => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/sound.wav`);
    audio.play();
  };

  return (
    <>
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
              <Link to="/React-Project/Feedback">Feedback</Link>
            </li>
            <li className="nav-item">
              <Link to="/React-Project/Help">
                Help
                <HelpIcon />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/React-Project/Logout">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
      <marquee>
        <h1
          style={{
            textAlign: "center",
            color: "black",
            textShadow: "1.2px 1.2px pink",
          }}
        >
          WELCOME TO THE MOVIEAPP
        </h1>
      </marquee>
      <br />

      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <h3 style={{ color: "white" }}>
          Click for Movie Manager where you can store details about your
          favourite movies.
        </h3>
        <Link to="/React-Project/Frontend">
          <button onClick={() => soundfn()}>Click for Movie Manager</button>
        </Link>
        <br />
        <br />
        <h3 style={{ color: "white" }}>
          Click for Movie Search where you can search full details about your
          favourite movies.
        </h3>
        <Link to="/React-Project/MovieList">
          <button onClick={() => soundfn()}>Click for Movie Search</button>
        </Link>
      </div>
    </>
  );
};
export default Main;
