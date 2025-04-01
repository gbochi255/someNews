import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard"

const CommentsList = ({ articleId }) => {
    const [comments, setComments] = useState([]);
    const[loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://some-ncnews.onrender.com/api/articles/${articleId}/comments`)
        .then((res) => res.json())
        .then((data) => setComments(data))
        .catch((err) => console.error(err));
    }, [articleId]);
    return (
        <div className="comments-list">
            {comments && comments.length > 0 ? (
                comments.map((comment) => (
                    <CommentCard key={comment.comment_id} comment={comment} />
                ))
            ):(
                <p>No comments available</p>
            )}
            
        </div>
    );
};
export default CommentsList