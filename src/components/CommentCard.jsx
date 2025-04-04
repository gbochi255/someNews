import React, { useState } from "react";

const CommentCard = ({ comment, currentUser, onDelete }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState(null)
const handleDelete = () => {
    if (isDeleting) return;
    setIsDeleting(true);
    setDeleteError(null);
    

    fetch(`https://some-ncnews.onrender.com/api/comments/${comment.comment_id}`, {
        method: 'DELETE'
    })
    .then((res) => {
        if (!res.ok){
            throw new Error('Failed to delete comment');
        }
        onDelete(comment.comment_id);
    })
    .catch((err) => {
        setDeleteError(err.message);
        setIsDeleting(false);
    });
};
    
return (
        <div className="comment-card">
            <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-timestamp">
                {new Date(comment.created_at).toLocaleString()}
                </span>
            </div>
            <p className="comment-content">{comment.body}</p>
            {currentUser === comment.author && ( 
                <button onClick={handleDelete} disabled={isDeleting}>
                    {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
            )}
            {deleteError && <p className="error">Error: {deleteError}</p>}
            </div>
            );
};
export default CommentCard;