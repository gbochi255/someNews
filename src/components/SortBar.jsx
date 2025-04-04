import React from "react";
import { useSearchParams } from "react-router-dom";


const SortBar =() => {
    const [searchParams, setSearchParams] = useSearchParams();

    
    const currentSortBy = searchParams.get('sort_by') || 'created_at';
    const currentOrder = searchParams.get('order') || 'desc';

   
    const handleSortByChange = (e) => {
        const newSortBy = e.target.value;
        setSearchParams({
            sort_by: newSortBy,
            order: currentOrder,
        });
    };
    const handleOrderChange = (e) => {
        const newOrder = e.target.value;
        setSearchParams({
            sort_by: currentSortBy,
            order: newOrder,
        });
    };

    return (
        <div className="sort-bar">
            <label>
                Sort by:
                <select value={currentSortBy} onChange={handleSortByChange}>
                    <option value="created_at">Date</option>
                    <option value="comment_count">Comment Count</option>
                    <option value="votes">Votes</option>
                </select>
            </label>
            <label>
                Order:
                <select value={currentOrder} onChange={handleOrderChange}>
                    <option value="desc">Descending</option>
                    <option value="ascending">Ascending</option>
                </select>
            </label>
        </div>
    );
};
export default SortBar;