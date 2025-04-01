import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://some-ncnews.onrender.com/api/articles")
        .then((res) => res.json())
        .then((data )=> {
            console.log('fetched articles:', data);
            setArticles(data.articles)
        })
        .catch((err) => console.error(err))
    }, []);
    return (
        <div className="articles-list">
            {articles && articles.length > 0 ? (
                articles.map((article) => (
                    <ArticleCard key={article.article_id} article={article} />
                ))
            ) : (
                <p>No articles available</p>
            )}
        </div>
    );
}
export default ArticlesList;