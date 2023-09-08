import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HelpIcon from "@mui/icons-material/Help";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [searchgenre, setgenre] = useState("");

  useEffect(() => {}, []);

  const handleSearch = () => {
    const url =
      "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    axios
      .get(url + searchQuery)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error searching movies:", error);
      });
  };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?&api_key=04c35731a5ee918f014970082a0088b1&sort_by=popularity.desc&primary_release_date.get=2023-06-01`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <div>
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
      <div className="headbox">
        <h1>
          <span style={{ fontSize: "60px" }}>📽️</span> Movie Search App
          <span style={{ fontSize: "50px" }}>🍿</span>
        </h1>
      </div>
      <div
        style={{
          backgroundColor: "purple",
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <h3 style={{ color: "white" }}>
          Search the movies here and get their release date, language,
          popularity and a short summary of the movie :
        </h3>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Type Movie name"
        />
        <button
          onClick={handleSearch}
          style={{ backgroundColor: "violet", color: "black" }}
        >
          Search
        </button>
        <br />
        <br />
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
