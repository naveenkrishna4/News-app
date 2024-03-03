import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./home";

function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={
            <Signup
              name={name}
              setname={setname}
              email={email}
              setemail={setemail}
              password={password}
              setpassword={setpassword}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              email={email}
              setemail={setemail}
              password={password}
              setpassword={setpassword}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              name={name}
              setname={setname}
              email={email}
              setemail={setemail}
              password={password}
              setpassword={setpassword}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
