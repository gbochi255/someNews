import React from "react";
import { Link } from "react-router-dom";


const ArticleCard = ({ article }) => {
    if (!article) return null;
    return (
        <article className="article-card">
            <h2 className="article-title">{article.title}</h2>
            <div className="container">
                <span className="article-author">By {article.author}</span>
                <span className="article-date">{new Date(article.created_at).toLocaleDateString()}</span>
            </div>
            <p>{article.description}</p>
            <Link to={`/articles/${article.article_id}`} className="read-more">Read More</Link>
        </article>
    );
};
export default ArticleCard;