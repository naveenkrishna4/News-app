import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Update from "./profile";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

function Newsboard({
  category,
  setCategory,
  name,
  setname,
  email,
  setemail,
  password,
  setpassword,
  setcurrButton,
}) {
  if (category === "Profile") {
    return (
      <Update
        setCategory={setCategory}
        name={name}
        setname={setname}
        email={email}
        setemail={setemail}
        password={password}
        setpassword={setpassword}
        setcurrButton={setcurrButton}
      />
    );
  } else {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const url = `/top-headlines?country=in&category=${category}&apiKey=${
            import.meta.env.VITE_API_KEY
          }`;
          const response = await instance.get(url);
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
