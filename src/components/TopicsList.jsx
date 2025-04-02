import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TopicsList = () => {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`https://some-ncnews.onrender.com/api/topics`)
        .then((res) => {
            if(!res.ok) throw new Error('Error fetching topics.')
                return res.json();
        })
        .then((data) => {
            setTopics(data.topics);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false)
        });
    }, []);
    if(loading) return <p>Loading topics...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="topics-list">
            <h1>Topics</h1>
            <button onClick={() => navigate('/')} className="return-home">
                Home
            </button>
            <ul>
                {topics.map(topic => (
                    <li key={topic.slug}>
                        <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};
export default TopicsList;