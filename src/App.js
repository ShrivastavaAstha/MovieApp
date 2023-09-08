import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import Frontend from "./component/Frontend";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Main from "./component/Main";
import Help from "./component/Help";
import TermsOfService from "./component/TermsOfService";
import MovieList from "./component/MovieList";
import Feedback from "./component/Feedback";
import Logout from "./component/Logout";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/React-Project/Login" element={<Login />} />
        <Route path="/React-Project/Signup" element={<Signup />} />
        <Route path="/React-Project/Main" element={<Main />} />
        <Route path="/React-Project/Frontend" element={<Frontend />} />
        <Route path="/React-Project/Feedback" element={<Feedback />} />
        <Route path="/React-Project/Help" element={<Help />} />
        <Route path="/React-Project/Logout" element={<Logout />} />
        <Route
          path="/React-Project/TermsOfService"
          element={<TermsOfService />}
        />
        <Route exact path="/React-Project/MovieList" element={<MovieList />} />
      </Routes>
      {/* <Feedback /> */}
    </>
  );
};
export default App;
