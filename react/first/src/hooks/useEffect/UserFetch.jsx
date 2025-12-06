// Build a component that fetches and displays data from a public API when it mounts.

// Use useEffect for the fetch

// Show a loading state while fetching

// Handle and display errors if any
import { useEffect, useState } from "react";

const UserFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const card= {
    background: "#f4f4f4",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "10px"
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <h3 style={{color:"blue"}}>Loading data...</h3>;
  if (error) return <h3 style={{color:"red"}}>Error: {error}</h3>;

  return (
    <div>
      <h2>User List</h2>
      {users.map((u) => (
        <div key={u.id} style={card}>
          <p><strong>{u.name}</strong></p>
          <p>Email: {u.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserFetch;
