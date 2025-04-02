import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ArticleCard from"./ArticleCard"


const TopicPage = () => {
    const { topic } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        fetch(`https://some-ncnews.onrender.com/api/articles?topic=${topic}`)
        .then((res) => {
            if(!res.ok){
                throw new Error('Error fetching articles for this topic.');
            }
            return res.json();
            })
            .then((data) => {
                setArticles(data.articles);
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false)
            });
    }, [topic]);
    if(loading) return <p>Loading articles for "{topic}"...</p>;
    if(error) return <p>Error: {error}</p>;

    return (
        <div className="topic-page">
            <button onClick={() => window.location.href = '/'} className="return-home">Home</button>
            <h1>Articles on "{topic}"</h1>
            {articles.length > 0 ? (
                articles.map((article) => (
                    <ArticleCard key={article.article_id} article={article} />
                ))
            ) : (
                <p>No articles found for this topic.</p>
            )}

        </div>
    );
};
export default TopicPage;

