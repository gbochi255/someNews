import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SortBar from "./SortBar"
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();

    const sortBy = searchParams.get("sort_by") || "created_at";
    const order = searchParams.get("order") || "desc";

    useEffect(() => {
        setLoading(true);
        fetch(`https://some-ncnews.onrender.com/api/articles?sor_by=${sortBy}&order=${order}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error fetching articles");
            } 
            return res.json();
        })
        .then((data) => {
            setArticles(data.articles);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, [sortBy, order]);
    
    

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize =5;

    useEffect(() => {
        fetch("https://some-ncnews.onrender.com/api/articles")
        .then((res) => res.json())
        .then((data )=> {
            setArticles(data.articles)
            setLoading(false);
        })
        .catch((err) => console.error(err))
        setError(false)
    }, []);

    //if(loading) return <p>Loading articles...</p>;
    //if(error) return <p>Error: {error}</p>;

    if (loading) return <p>Loading articles...</p>;
    if (error) return <p>Error: {error}</p>

    const totalPages = Math.ceil(articles.length / pageSize);
    const currentArticles = articles.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    
    return (
        

        <div className="articles-list">
            <SortBar />
            {currentArticles.map(article => (
                <ArticleCard key={article.article_id} article={article} />
            ))}
            <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev -1)}>
                    previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};
export default ArticlesList;