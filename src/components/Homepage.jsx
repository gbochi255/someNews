import React from "react";
import { Link } from "react-router-dom";


const Homepage = () => {
    return (
        <div className="homepage">
            <div>
            <h1 className="home-intro">Welcome to the NC-News</h1>
            <p>Your hub for the latest news!</p>
            
            <img src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Boat on a serene riverside"
                width="300px" />
                </div>
                <div className="home-buttons">
                    <Link to="/articles" className="home-button">View All Articles</Link>
                    <Link to="/topics" className="home-button">Browse Topics</Link>
                    <Link to="/comments" className="home-button">Read Comments</Link>
                    <Link to="/users" className="home-button">Browse Users</Link>
                </div>
                
                
            </div>

    );
};
export default Homepage;