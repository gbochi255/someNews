import { useState } from "react";
import React from "react";

const VotePanel = ({ articleId, initialVotes }) => {
    const [votes, setVotes] = useState(initialVotes);
    const [error, setError] = useState(null);

    const handleVote = (delta) => {
        setVotes((currentVotes) => currentVotes + delta);
        setError(null);

    fetch(`https://some-ncnews.onrender.com/api/articles/${articleId}/votes`),
    {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ inc_votes: delta }),
    }
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        setVotes(data.article.votes);
    })
    .catch((err) => {
        setVotes((currentVotes) => currentVotes - delta);
        setError(err.message);
    });
    };


    return (
        <div className="vote-panel">
            <p>Votes: {votes}</p>
            <div className="vote-buttons">
                <button onClick={() => handleVote(1)}>Upvote</button>
                <button onClick={() => handleVote(-1)}>Downvote</button>
            </div>
                {error && <p className="error">Error: {error}</p>}
        </div>
    );

};
export default VotePanel;