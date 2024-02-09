import React from "react";
import Navigationbar from "./components/navigationbar";
import Newsboard from "./components/newsboard";
import { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div style={{ backgroundColor: "#ADD8E6" }}>
      <Navigationbar setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  );
};
export default App;
