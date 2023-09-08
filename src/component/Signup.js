import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./Login.css";
import CallIcon from "@mui/icons-material/Call";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
// import LoginIcon from "@mui/icons-material/Login";

const Signup = () => {
  const [username, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passworderror, setpwerror] = useState("");
  const [accountcreated, setaccountcreated] = useState(false);

  //-------------------------add account api call--------------
  const addaccount = async () => {
    if (
      username.trim() === "" ||
      contact.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    )
      return toast.warning("Please Provide Complete Details.");
    else if (password.length < 6)
      return toast.warning("Please set a password of more than 6 characters.");
    else if (contact.length < 10)
      return toast.warning("Please provide a valid contact number.");
    setname("");
    setcontact("");
    setemail("");
    setpassword("");

    const response = await axios.post("/api/addaccount", {
      username,
      contact,
      email,
      password,
    });
    if (response.data.success) {
      toast.success("Account created successfully! You may Login.");
      const audio = new Audio(`${process.env.PUBLIC_URL}/button.mp3`);
      audio.play();
      // alert("Account created successfully! You may now login");
      // navigate("/React-Project/Login");
      setaccountcreated(true);
    } else toast.error("Email already registered! Please Login");
  };

  //-------password error condition----------------------------
  const pwcondition = (e) => {
    const pw = e.target.value;
    setpassword(pw);
    if (pw.length < 6) {
      setpwerror("Set a strong password of more than 6 characters.");
    } else {
      setpwerror("");
    }
  };

  return (
    <>
      <ToastContainer />
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
        <h1>Signup</h1>
        <label>
          <PersonIcon />{" "}
        </label>
        <br />
        <input
          value={username}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <br />
        <label>
          <CallIcon />{" "}
        </label>
        <br />
        <input
          value={contact}
          onChange={(e) => setcontact(e.target.value)}
          type="number"
          placeholder="Contact Number"
        />
        <br />
        <br />
        <label>
          <EmailIcon />{" "}
        </label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <br />
        <label>
          <KeyIcon />{" "}
        </label>
        <br />
        <input
          type="password"
          value={password}
          minLength={7}
          onChange={pwcondition}
          placeholder="Password"
        />
        {passworderror && <p style={{ color: "red" }}>{passworderror}</p>}
        <br />
        <br />
        <button
          onClick={() => addaccount()}
          style={{ backgroundColor: "darkgreen" }}
        >
          Create Account
        </button>
        <br />
        <br />
        {accountcreated && (
          <Link to="/React-Project/Login">
            <button>Login</button>
          </Link>
        )}
        {/* <br />
        <br />
        <Link to="/">
          <button onClick={() => soundfn()}>Home</button>
        </Link>
        */}
        <br />
        <br />
        <Link to="/React-Project/Login">
          <span style={{ color: "purple" }}>
            {" "}
            <b>Already have an account?</b>
          </span>
        </Link>
        <br />
        <br />
        <p style={{ color: "rgba(77, 70, 70, 0.8)" }}>
          {" "}
          ©️ MovieApp 2023.By AS.
        </p>
      </div>
      <br />
      <br />
      <div
        style={{
          marginLeft: "4px",
          paddingLeft: "6px",
          textAlign: "center",
          position: "absolute",
          bottom: "0",
          color: "white",
          fontSize: "14px",
        }}
      >
        By creating an account you agree to the{" "}
        <Link to="/React-Project/TermsOfService">Terms of Service</Link>. For
        more information about MovieApp's privacy practices, see the
        <Link to="/React-Project/TermsOfService">
          {" "}
          MovieApp Privacy Statement
        </Link>
        . We'll occasionally send you account-related emails.
      </div>
    </>
  );
};
export default Signup;
