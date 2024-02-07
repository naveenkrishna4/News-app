import React from "react";

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-cyan-200">
      <div className="register">
        <h2>Register</h2>
        <div className="form group">
          <label htmlFor="email">Email address</label>
          <input type="email"></input>
        </div>
        <div className="form group">
          <label htmlFor="password">Password</label>
          <input type="password"></input>
        </div>
        <div className="form group">
          <label htmlFor="checkbox">Remember me</label>
          <input type="checkbox"></input>
        </div>
        <button type="submit" className="btn">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Signup;
