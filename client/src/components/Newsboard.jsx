import React from "react";
import { useState, useEffect } from "react";
import Newsitem from "./newsitem";
import Profile from "./profile";

function Newsboard({ category }) {
  if (category === "Profile") {
    <Profile />;
  } else {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setArticles(data.articles));
    }, [category]);

    return (
      <div>
        <br></br>
        <h2 className="text-center">
          <span
            className=""
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            {" "}
            Latest News
          </span>
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
