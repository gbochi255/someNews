import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import VotePanel from "./VotePanel";
import NewCommentForm from "./NewCommentForm";


const ArticleDetailPage = (currentUser) => {
    const { article_id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        setLoading(true);
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

    useEffect(() => {
        fetch(`https://some-ncnews.onrender.com/api/articles/${article_id}/comments`)
        .then((res) => res.json())
        .then((data) => {
            setComments(data.comments);
        })
        .catch((err) => console.error(err));
    }, [article_id]);

    const handleCommentPosted = (newComment) => {
       
        setComments((prevComments) => [newComment, ...prevComments]);
    };
    const handleCommentDelete = (deletedCommentId) => {
        setComments((prevComments) => prevComments.filter((comment) => comment.comment_id !== deletedCommentId)
    );

    };

   
    const handleReturn =() => {
       navigate(-1)
    };
   
    
    if (loading) return <p>Loading....</p>;
    if (error) return <p>Error: {error}</p>;
    if(!article) return <p>No Article found. <Link to="/articles">Return to Articles</Link></p>;
    

    return (
        <div className="article-detail">
            <button onClick={() => window.history.back()} className="return-home">&larr; return</button>
            {/*<button onClick={handleReturn} className="return-button">Return</button>*/}
            <h1>{article.title}</h1>
            <div className="container">
                <span>By {article.author}</span>
                <span>{new Date(article.created_at).toLocaleDateString()}</span>
            </div>
            {article.article_img_url && (
                <img src={article.article_img_url} 
                alt={article.title} />
            )}
            <div className="content">
                <p>{article.body}</p>
            </div>
            <VotePanel articleId={article.article_id} initialVotes={article.votes} />
            <section className="comments-section">
            <h2>Comments</h2>
            <NewCommentForm articleId={article.article_id} username={currentUser}
            onCommentPosted={handleCommentPosted} />
            <CommentsList 
            comments={comments} 
            currentUser={currentUser}
            onCommentDelete={handleCommentDelete}/>
            </section>
            </div>
    );
};
export default ArticleDetailPage;