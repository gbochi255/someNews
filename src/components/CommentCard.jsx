import React from "react";

const CommentCard = ({ comment }) => {
    if(!comment) return null;
    return (
        <article className="comment-card">
            <div className="comment-author">{comment.author}</div>
            <p className="comment-text">{comment.body}</p>
            <div className="comment-timestamp">
                {new Date(comment.created_at).toLocaleString()}
            </div>

        </article>
    );
};
export default CommentCard;