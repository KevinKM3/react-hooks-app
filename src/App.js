import React from "react";
import UserTable from "./tables/UserTable";

const App = () => {
  return (
    <div className="container">
      <h1>Kevin's CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default App;
