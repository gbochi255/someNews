import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://some-ncnews.onrender.com/articles")
        .then((res) => res.json())
        .then((data )=> {
            console.log('fetched articles:', data);
            setArticles(data)
        })
        .catch((err) => console.error(err))
    }, []);
    return (
        <div className="articles-list">
            {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
};
export default ArticlesList;