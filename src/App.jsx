import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
  }, [])
  console.log(users)
  return (
    <div style={{
        marginLeft: "20px"
    }}>
      <h2>Users</h2>
      {users.map(user => (
        <li>{user.name} ({user.email}) </li>
      ))}
    </div>
  );
};

export default App;
