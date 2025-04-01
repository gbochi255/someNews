import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";


const ArticleDetailPage = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://some-ncnews.onrender.com/api/articles/${article_id}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error fetching article");
            }
            return res.json();
        })
        .then((data) => {
            setArticle(data.article);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setError(err.message);
            setLoading(false);
        });
        
    },[article_id]);
    
    if (loading) return <p>Loading....</p>;
    if (error) return <p>Error: {error}</p>;
    if(!article) return <p>No Article found</p>;

    return (
        <div className="article-detail">
            <h2>{article.title}</h2>
            <p>By {article.author} | {new Date(article.created_at).toLocaleDateString()}</p>
            <p>{article.body}</p>
            <img src={article.article_img_url} 
            alt={article.title} />
            <h3>Comments:</h3>
            <CommentsList article_id={article_id} />
            </div>
            );
};
export default ArticleDetailPage;