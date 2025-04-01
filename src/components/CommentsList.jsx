import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard"

const CommentsList = ({ article_id }) => {
    const [comments, setComments] = useState([]);
    const[loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!articleId) return;
        fetch(`https://some-ncnews.onrender.com/api/articles/${article_id}/comments`)
        .then((res) => res.json())
        .then((data) => {
            setComments(data.comments)
            setLoading(false);
        })
        .catch((err) => {
            console.error("Error fetching comments:", err)
            setError(err.message)
            setLoading(false)
        });
    }, [article_id]);

    if(loading) return <p>Loading comments...</p>
    if(error) return <p>Error: {error}</p>
        
    return (
        <div className="comments-list">
            {comments && comments.length > 0 ? (
                comments.map((comment) => (
                    <CommentCard key={comment.comment_id} comment={comment} />)
                ) 
               
            ):(
                <p>No comments available</p>
            )}
            
        </div>
    );
};
export default CommentsList