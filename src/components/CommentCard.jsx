import React from "react";

const CommentCard = ({ comment }) => {
    if(!comment) return null;
    return (
        <div className="comment-card">
            <div className="comment-header">
            <span className="comment-author">{comment.author}</span>
            <span className="comment-timestamp">
                {new Date(comment.created_at).toLocaleDateString()}
            </span>
            </div>
            <p className="comment-content">{comment.body}</p>
            <small>Votes: {comment.votes} | {new Date(comment.created_at).toLocaleString()}</small>    
            </div>
            );
};
export default CommentCard;