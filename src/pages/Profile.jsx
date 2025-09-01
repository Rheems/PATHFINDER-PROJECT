import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="dashboard">
      <h1>Profile</h1>
      <p>Welcome, {user?.name}</p>
      <nav>
        <a href="/dashboard">Home</a>
        <a href="/courses">Courses</a>
        <a href="/assignments">Assignments</a>
        <a href="/profile">Profile</a>
      </nav>
      <div className="dashboard-content">
        <h2>Your Profile</h2>
        <p>Profile information will appear here.</p>
      </div>
    </div>
  );
};

export default Profile;
