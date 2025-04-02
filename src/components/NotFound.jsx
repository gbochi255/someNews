import React from "react";
import { Link } from "react-router-dom"


const NotFound = () => (
    <div className="not-found">
        <h2>404 - Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Return to Homepage</Link>
    </div>
);
export default NotFound;