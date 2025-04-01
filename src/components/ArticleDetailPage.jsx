import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";


const ArticleDetailPage = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://some-ncnews.onrender.com/api/articles/${articleId}`)
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
        
    },[articleId]);
    
    if (loading) return <p>Loading....</p>;
    if (error) return <p>Error: {error}</p>;
    if(!article) return <p>No Article found</p>;

    return (
        <article className="article-detail">
            <h1>{article.title}</h1>
            <div className="container">
                <span>by {article.author}</span>
                <span>{new Date(article.created_at).toLocaleDateString()}</span>
            </div>
            {article.article_img_url && (
                <img src={article.article_img_url} 
                alt={article.title} />
            )}
            <div className="content">
                <p>{article.body}</p>
            </div>
            
                <h2>Comments</h2>
                <CommentsList articleId={articleId} />
            
        </article>
    );
};
export default ArticleDetailPage;