import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  // API call
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setArticles(data.articles));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h2 className="text-center">Latest News</h2>
      {/* Passing each news object to NewsItem component */}
      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
