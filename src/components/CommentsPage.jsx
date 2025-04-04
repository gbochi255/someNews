import React, {useState, useEffect} from "react";
import CommentCard from "./CommentCard";

const CommentPage = ({ article_id }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(`https://some-ncnews.onrender.com/api/articles/`)
        .then((res) => {
            if(!res.ok) throw new Error('Error fetching comments')
                return res.json
        })
        .then((data) => {
            setComments(data.comments || []);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, [article_id]);

    if(loading) return <p>Loading Comments</p>;
    if(error) return <p>Error: {error}</p>;

    return (
        <div className="comments-page">
            <h1>All Comments</h1>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <CommentCard key={comment.comment_id} comment={comment} />
                ))
            ) : (
                <p>No comments found.</p>
            )}
        </div>
    );
};
export default CommentPage;