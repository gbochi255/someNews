import React, { useState, useEffect } from "react";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://some-ncnews.onrender.com/api/users`)
        .then((res) => {
            if(!res.ok) {
        throw new Error('Error fetching users.')
                }
            return res.json();
        })
        .then((data) => {
            setUsers(data.users);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if(loading) return <p>Loading users...</p>
    if(error) return <p>Error: {error}</p>

        return (
            <div className="user-list">
                <h1>Users</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.username}>
                            <img src={user.avatar_url}
                            alt={`${user.name}' avatar`} width="50" />
                            {user.name} ({user.username})
                            
                        </li>
                    ))}
                </ul>
            </div>
        );
};
export default Users;