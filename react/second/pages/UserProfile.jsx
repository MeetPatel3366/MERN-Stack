// Build a UserProfile component that shows details based on a dynamic :userId route.
// Use useParams to access the userId from the URL
// Simulate loading user data with an array of user objects
// Show a message if the user is not found

import React from 'react'
import { useParams } from "react-router-dom";

const users = [
    { id: "1", name: "meet", email: "meet@gmail.com", age: 21 },
    { id: "2", name: "vasu", email: "vasu@gmail.com", age: 22 },
    { id: "3", name: "yash", email: "yash@gmail.com", age: 22 },
];

const UserProfile = () => {
    const card = {
        width: "300px",
        padding: "20px",
        borderRadius: "10px",
        background: "gray",
        textAlign: "center",
    }
    const { userId } = useParams();

    const user = users.find((u) => u.id === userId);

    return (
        <div style={card}>
            {user ? (
                <>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age}</p>
                </>
            ) : (
                <h3 style={{ color: "red" }}>User not found!</h3>
            )}
        </div>
    );
};

export default UserProfile;
