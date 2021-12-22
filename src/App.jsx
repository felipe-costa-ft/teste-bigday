import "./App.css";
import React from "react";
import axios from "axios";
import ArticleAbstract from "./components/ArticleAbstract";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const articlesRes = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const commentsRes = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setArticles(
        articlesRes.data.map((article) => (
          <ArticleAbstract
            key={article.id}
            data={article}
            comments={commentsRes.data}
          />
        ))
      );
    };
    fetchData();
  }, []);

  return <div className="App">{articles}</div>;
}

export default App;
