import React from "react";

const Assignments = ({ user }) => {
  return (
    <div>
      <h1>Assignments Page</h1>
      <p>Welcome, {user?.name}</p>
      {/* Add your assignments content here */}
    </div>
  );
};

export default Assignments;
