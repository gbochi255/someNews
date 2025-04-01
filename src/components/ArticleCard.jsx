import React from "react";


const ArticleCard = ({ article }) => {
    if (!article) return null;
    return (
        <article className="article-card">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-description">{article.description}</p>
            <div className="container">
                <span>{article.author}</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
            <a href={`/article/${article.id}`} className="read-more">Read More</a>
        </article>
    );
};
export default ArticleCard;