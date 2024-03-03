// Newsboard.jsx
import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Update from "./profile";

function Newsboard({
  category,
  name,
  setname,
  email,
  setemail,
  password,
  setpassword,
}) {
  if (category === "Profile") {
    return (
      <Update
        name={name}
        setname={setname}
        email={email}
        setemail={setemail}
        password={password}
        setpassword={setpassword}
      />
    );
  } else {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
            import.meta.env.VITE_API_KEY
          }`;
          const response = await fetch(url);
          const data = await response.json();
          setArticles(data.articles);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

      fetchData();
    }, [category]);

    return (
      <div>
        <br />
        <h2
          className="text-center"
          style={{ fontSize: "40px", fontWeight: "bold", fontFamily: "Roboto" }}
        >
          Latest News
        </h2>
        {articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    );
  }
}

export default Newsboard;
