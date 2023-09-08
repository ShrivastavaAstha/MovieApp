import React from "react";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <>
      <h1
        style={{
          marginLeft: "10px",
          textShadow: "1.5px 1.5px pink",
          fontFamily: "sans-serif",
          fontSize: "30px",
        }}
      >
        MovieApp
      </h1>
      <div class="content">
        <p style={{ color: "rgb(57, 55, 55)", fontSize: "25px" }}>
          Are you sure you want to logout?
        </p>
        <Link to="/">
          <button
            style={{
              backgroundColor: "transparent",
              color: "black",
              fontSize: "15px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            Logout
          </button>
        </Link>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
export default Logout;
