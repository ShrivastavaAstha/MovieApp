import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const soundfn = () => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/sound.wav`);
    audio.play();
  };

  return (
    <div className="Loginbox">
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
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content1">
        <h1>Welcome to the Movie Recommandation App</h1>
        <h3 style={{ color: "white" }}>
          The best app to store your movie experiences and search about your
          favourite movies.
        </h3>

        <br />
        <br />
        <div className="sb">
          <Link to="/React-Project/Login">
            <button onClick={() => soundfn()}>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
