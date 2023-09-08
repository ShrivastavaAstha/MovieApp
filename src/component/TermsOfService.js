import React from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Tos = () => {
  return (
    <>
      <div style={{ paddingTop: "20px" }}>
        <Link to="/React-Project/Signup">
          <button style={{ backgroundColor: "transparent", color: "white" }}>
            <KeyboardBackspaceIcon />
          </button>
        </Link>
      </div>
      <h1 style={{ textAlign: "center", color: "white" }}>
        MovieApp Terms of Service
      </h1>
      <p style={{ textAlign: "center", color: "yellow" }}>
        Thank you for using MovieApp! We're happy you're here. Please read this
        Terms of Service agreement carefully before accessing or using MovieApp.
        Because it is such an important contract between us and our users, we
        have tried to make it as clear as possible.{" "}
      </p>
    </>
  );
};
export default Tos;
