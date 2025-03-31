import React, { useState, useEffect } from "react";
import { params, useParams } from "react-router-dom";


const ArticleDetailPage = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/api/articles/${articleId}`)
        .then((res) => {
            if(!res.ok) {
                throw new Error("Error fetching article");
            }
            return res.json();
        })
        .then((data) => {
            setArticle(data.article);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setError(err.message);
            setLoading(false);
        });
        [articleId]
    })
}