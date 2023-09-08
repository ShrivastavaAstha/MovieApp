import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import "./Frontend.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MenuIcon from "@mui/icons-material/Menu";
import HelpIcon from "@mui/icons-material/Help";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { useLocation, useNavigate } from "react-router-dom";
<link
  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=DynaPuff&display=swap"
  rel="stylesheet"
/>;

const MovieManager = () => {
  // const location = useLocation();
  const [movie, setmovie] = useState([]);
  const [name, setname] = useState("");
  const [rating, setrating] = useState("");
  const [gener, setgener] = useState("");
  const [description, setds] = useState("");
  const [Type, settype] = useState("");
  const [date, setdate] = useState(new Date());

  //to get all data:
  const getdata = async () => {
    const response = await axios.get("/api/getdata");
    if (response.data.success) {
      getdata();
      setmovie(response.data.data);
    } else {
      toast.error("Something Went Wrong");
    }
  };

  //to add data:
  const addmovie = async () => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/button.mp3`);
    audio.play();
    if (
      name.trim() === "" ||
      rating.trim() === "" ||
      gener.trim() === "" ||
      description.trim() === "" ||
      Type.trim() === ""
    )
      return toast.warning("Please Provide Complete Details.");
    else if (!date) return toast.warning("Please Provide Complete Details.");
    getdata();

    setname("");
    setrating("");
    setgener("");
    setds("");
    settype("");
    setdate("");

    const response = await axios.post("/api/addmovie", {
      name,
      rating,
      date,
      gener,
      description,
      Type,
      Status: "Unwatched",
    });
    console.log(response);

    if (response.data.success) {
      toast.success("Data stored successfully");
      const audio = new Audio(`${process.env.PUBLIC_URL}/button.mp3`);
      audio.play();
    } else toast.error("Something Went wrong!");
  };
  //to delete data:
  const deletedata = async (id) => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/sound.wav`);
    audio.play();
    const response = await axios.delete(`/api/deletedata/${id}`);
    if (response.data.success) {
      getdata();
      toast.success("Data Deleted Successully");
    } else {
      toast.warning("Something Went Wrong");
    }
  };

  //To update status:
  const handlestatus = async (id, status) => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/button.mp3`);
    audio.play();
    let newStatus;
    if (status === "Unwatched") {
      newStatus = "Watched";
    } else if (status === "Watched") {
      newStatus = "Rewatch";
    } else if (status === "Rewatch") {
      newStatus = "Watched";
    }
    const response = await axios.post(`/api/handlestatus/${id}`, {
      Status: newStatus,
    });
    if (response.data.success) {
      getdata();
      toast.success("Data updated successfully.");
    } else {
      toast.error("Something went wrong");
    }
  };

  //getbutton:

  const getbuttonName = (status) => {
    if (status === "Unwatched") return "WATCH";
    else if (status === "Watched") return "REWATCH";
    else if (status === "Rewatch") return "REWATCH";
  };

  const getcolor = (status) => {
    if (status === "Unwatched") return "#83bca9";
    else if (status === "Watched") return " #b6b791 ";
    else if (status === "Rewatch") return "rgb(227, 154, 82)";
  };

  useEffect(() => {
    getdata();
  }, []);

  // const location = useLocation();
  // const authToken = localStorage.getItem("authToken");
  // const navigate = useNavigate();
  // if (!authToken) {
  //   navigate("/login", { state: { from: location.login } });
  //   return null;
  // }

  //-----------------------------------------------------------------------------
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  //--------------------------------------------------
  return (
    <>
      <ToastContainer />
      <div class="frontend">
        {/* ---------------------------Navbar------------------------------ */}

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
                <Link to="/React-Project/MovieList">Search Movies</Link>
              </li>
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

        {/* --------------------------------------------------------- */}
        <div className="headbox">
          <h1>
            <span style={{ fontSize: "60px" }}>📽️</span> Movie Manager App
            <span style={{ fontSize: "50px" }}>🍿</span>
          </h1>
        </div>
        <br />
        <br />

        <div className="outerbox">
          <label>
            <b>Movie </b>
          </label>
          <br />
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter movie name!"
            style={{ backgroundColor: "#e0b7d3", color: "brown" }}
          />
          <br />
          <label>
            <b>Gener</b>{" "}
          </label>
          <br />
          <input
            value={gener}
            onChange={(e) => setgener(e.target.value)}
            type="text"
            placeholder="Enter Gener"
            style={{ backgroundColor: "#e0b7d3", color: "brown" }}
          />
          <br />
          <label>
            <b>Rating</b>{" "}
          </label>
          <br />
          <input
            value={rating}
            onChange={(e) => setrating(e.target.value)}
            type="number"
            placeholder="Rating!"
            style={{ backgroundColor: "#e0b7d3", color: "brown" }}
          />
          <br />
          <label>
            <b>Relase Date</b>
          </label>
          <br />
          <input
            value={date}
            onChange={(e) => setdate(e.target.value)}
            type="date"
            style={{ backgroundColor: "#e0b7d3", color: "brown" }}
          />
          <br />
          <label>
            <b>Description </b>
          </label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setds(e.target.value)}
            type="text"
            placeholder="About Movie!"
            style={{ backgroundColor: "#e0b7d3", color: "brown" }}
          />
          <br />
          <label>
            <b>Type </b>
          </label>
          <br />
          <input
            value={Type}
            onChange={(e) => settype(e.target.value)}
            type="text"
            placeholder="Bollywood"
            style={{ backgroundColor: "#e0b7d3", color: "brown" }}
          />
          <br />
          <br />
          <button
            onClick={() => addmovie()}
            style={{ backgroundColor: "darkgreen" }}
          >
            Add Data
          </button>

          <br />
          <br />

          {/* ---------------------------------------------------------------- */}
          {/* <button onClick={handleButtonClick}>
            {showlist ? "Hide Movie List" : "Show Movie List"}
          </button>
          {showlist && (
            <ul>
              {movie.map((item, index) => (
                <li key={index}>{item.original_title}</li>
              ))}
            </ul>
          )} */}
          {/* <button onClick={() => navigate("/login")}>Logout</button> */}
          {/* ---------------------------------------------------------------- */}
          <br />
        </div>

        <h2
          style={{
            fontSize: "30px",
            color: "cornsilk",
            animation: "blink 1s infinite",
          }}
        >
          Movie Infos🎬
        </h2>

        {movie.map((v, i) => {
          return (
            <div key={i}>
              <ul>
                <div
                  className="Notes"
                  style={{ backgroundColor: getcolor(v.Status) }}
                >
                  <br />
                  <li>
                    <b>
                      Movie Name: <br />
                      <span style={{ color: "purple" }}>{v.name}</span>
                    </b>
                  </li>
                  <b>Gener :</b> {v.gener}
                  <br />
                  <b>Rating:</b> {v.rating}
                  <br />
                  <b>Release Date:</b> {v.date}
                  <br />
                  <b>Description:</b>
                  <br /> {v.description}
                  <br />
                  <b>Type:</b> {v.Type}
                  <br />
                  <b>
                    Status: <span style={{ color: "purple" }}>{v.Status}</span>
                  </b>
                  <br />
                  <br />
                  <button
                    onClick={() => handlestatus(v._id, v.Status)}
                    style={{
                      backgroundColor: "rgb(112, 110, 3)",
                      color: "white",
                    }}
                  >
                    {getbuttonName(v.Status)}
                  </button>
                  <br />
                  <button
                    onClick={() => deletedata(v._id)}
                    type="button"
                    style={{
                      backgroundColor: "red",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      fontSize: "5px",
                    }}
                  >
                    <DeleteForeverIcon />
                  </button>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MovieManager;
