import React, { useState } from "react";
import UserTable from "./tables/UserTable";

const App = () => {
  const usersData = [
    { id: 1, name: "Jake", username: "jumper" },
    { id: 2, name: "Hunt", username: "aj" },
    { id: 3, name: "Myles", username: "jumpshot" },
  ];
  const [users, setUsers] = useState(usersData);

  return (
    <div className="container">
      <h1>Kevin's CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
