import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import PersonIcon from "@mui/icons-material/Person";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [showPassword, setshowPassword] = useState(false);

  const navigate = useNavigate();
  const soundfn = () => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/sound.wav`);
    audio.play();
  };

  const buttonfn = async () => {
    if (email.trim() === "" || password.trim() === "")
      return toast.warning("Please Provide Complete Details.");

    const response = await axios.post("/api/login", { email, password });
    if (response.data.success) {
      toast.success("Login successfull");
      navigate("/React-Project/Main");
      const audio = new Audio(`${process.env.PUBLIC_URL}/sound.wav`);
      audio.play();
    } else toast.error("Invalid Email or Password.");
  };

  //-------------------------------------------------------------------------

  const fp = () => {
    alert("You may create new accout.");
  };

  return (
    <>
      <ToastContainer />
      <div className="login">
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
          <h1>Login</h1>
          <form method="POST">
            <label>
              <PersonIcon />
            </label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email "
            />
            <br />
            <br />
            <label>
              <EnhancedEncryptionIcon />
            </label>
            <br />
            <input
              // type={showPassword ? "text" : "password"}
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
            />{" "}
            {/* <button
              onClick={() => setshowPassword(!showPassword)}
              style={{
                backgroundColor: "transparent",
                color: "black",
                border: "0px solid transparent",
                padding: "0px",
              }}
            > 
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>*/}
            <br />
            <a onClick={() => fp()} style={{ color: "black" }}>
              Forgot password?
            </a>
            <br />
            <br />
            {/* <Link to="/Frontend"> */}
            <button onClick={() => buttonfn()}>Login</button> {/* </Link> */}
          </form>
          <br />
          <Link to="/">
            <button onClick={() => soundfn()}>Home</button>
          </Link>
          <br />
          <br />
          <br />
          <span style={{ color: "black" }}>New to MovieApp?</span>
          <br />
          <Link to="/React-Project/Signup">
            <button
              type="button"
              style={{
                backgroundColor: "rgba(255,255,255,.8)",
                // border: "2px solid purple",
                borderRadius: "10px",
                color: "purple",
              }}
              onClick={() => soundfn()}
            >
              <b> Create new account</b>
            </button>
          </Link>
          <br />
          <br />
          <br />
          <p style={{ color: "rgba(77, 70, 70, 0.8)" }}>
            {" "}
            ©️ MovieApp 2023.By AS.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
