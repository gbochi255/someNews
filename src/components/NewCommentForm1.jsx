import { useState } from "react";
import React from "react";



const NewCommentForm = ({ article_id,  onCommentPosted }) => {
    const [commentBody, setCommentBody] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
//logic to validate input or ensure required fields
        if(!commentBody.trim()){
            setError('Comment cannot be empty.');
            return;
        }
        //disable button to avoid duplicate post
        setIsPosting(true);
        setError(null);

        fetch(`https://some-ncnews.onrender.com/api/articles/${article_id}/comments`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ body: commentBody })
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to post comment.');
            }
        })
        .then((data) => {
            onCommentPosted(data.comment);
            setCommentBody('');
            setIsPosting(false);
        })
        .catch((err) => {
            setError(err.message);
            setIsPosting(false);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="new-comment-form">
            <textarea value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
            placeholder="Write your comment here..." 
            required />
            {error && <p className="error">{error}</p>}
            <button type="submit" disabled={isPosting}>{isPosting ? 'Posting...' : 'Post Comment'}
                </button> 
        </form>
    );

};
export default NewCommentForm;