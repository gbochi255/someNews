import React from "react";
import { Link } from "react-router-dom"
const Header = () => {
    return (
    <header className="site-header">
        <div className="header-content">
          <h1 className="logo">Welcome to NC-News</h1>
          <p>Your hub for latest news!</p>
          <nav className="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/comments">Comments</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </nav>
        </div>
    </header>
    );
};
export default Header;