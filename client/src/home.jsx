import React from "react";
import Navigationbar from "./components/navbar";
import Newsboard from "./components/Newsboard";
import { useState } from "react";

const App = ({ name, setname, email, setemail, password, setpassword }) => {
  const [category, setCategory] = useState("general");
  return (
    <div style={{ backgroundColor: "#ADD8E6" }}>
      <Navigationbar setCategory={setCategory} />
      <Newsboard
        category={category}
        name={name}
        setname={setname}
        email={email}
        setemail={setemail}
        password={password}
        setpassword={setpassword}
      />
    </div>
  );
};
export default App;
