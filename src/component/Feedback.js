import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Feedback.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuIcon from "@mui/icons-material/Menu";
import HelpIcon from "@mui/icons-material/Help";

const Feedback = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [feedback, setfeedback] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const addfeedback = async () => {
    if (name.trim() === "" || email.trim() === "" || feedback.trim() === "")
      return toast.warning("Please Provide Complete Details.");
    setname("");
    setemail("");
    setfeedback("");

    const response = await axios.post("/api/addfeedback", {
      name,
      email,
      feedback,
    });
    if (response.data.success) {
      toast.success("Thank you for your feedback!");
      const audio = new Audio(`${process.env.PUBLIC_URL}/button.mp3`);
      audio.play();
    } else toast.error("Something went wrong!");
  };
  return (
    <>
      <ToastContainer />
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
      <br />

      <h2
        style={{
          textAlign: "center",
          color: "white",
          textShadow: " 2px 2px black",
        }}
      >
        We value your feedback.
      </h2>
      <h3
        style={{
          textAlign: "center",
          textShadow: " 2px 2px black",
          color: "white",
        }}
      >
        Please complete the form and share your experiences so that we can
        improve.
      </h3>

      <div class="contents">
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Name"
          style={{
            width: "250px",
            backgroundColor: "rgba(231, 220, 220, 0.8)",
          }}
        />
        <br />

        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email "
          style={{
            width: "250px",
            backgroundColor: "rgba(231, 220, 220, 0.8)",
          }}
        />
        <br />

        <br />
        <textarea
          type="text"
          value={feedback}
          onChange={(e) => setfeedback(e.target.value)}
          placeholder="feedback "
          style={{
            height: "100px",
            width: "250px",
            backgroundColor: "rgba(231, 220, 220, 0.8)",
          }}
        />
        <br />
        <br />
        <button onClick={() => addfeedback()}>Submit feedback</button>
      </div>
    </>
  );
};
export default Feedback;
