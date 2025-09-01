// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import '../styles/Dashboard.css';

// const Dashboard = ({ user, onLogout }) => {
//   const [courses, setCourses] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [stats, setStats] = useState({
//     enrolledCourses: 0,
//     pendingAssignments: 0,
//     completedAssignments: 0,
//   });
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // Fetch courses from Fake Store API
//         const coursesResponse = await axios.get(
//           'https://fakestoreapi.com/products?limit=4'
//         );
//         setCourses(coursesResponse.data);

//         // Fetch assignments from JSONPlaceholder
//         const assignmentsResponse = await axios.get(
//           'https://jsonplaceholder.typicode.com/todos?userId=1&_limit=5'
//         );
//         setAssignments(assignmentsResponse.data);

//         // Calculate stats
//         const completed = assignmentsResponse.data.filter(
//           (item) => item.completed
//         ).length;
//         const pending = assignmentsResponse.data.filter(
//           (item) => !item.completed
//         ).length;

//         setStats({
//           enrolledCourses: 4, // Hardcoded for demo
//           pendingAssignments: pending,
//           completedAssignments: completed,
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally
//       {return

//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const isActive = (path) => {
//     return location.pathname === path ? 'active' : '';
//   };

//   if (loading) {
//     return <div className="loading">Loading dashboard...</div>;
//   }

//       <main className="main-content">
//         <header className="top-bar">
//           <div className="search-bar">
//             <input type="text" placeholder="Search..." />
//           </div>
//           <div className="user-menu">
//             <img
//               src={user.avatar}
//               alt={user.name}
//               className="user-avatar"
//             />
//             <span className="user-name">{user.name}</span>
//           </div>
//         </header>

//         <div className="content">
//           <div className="welcome-banner">
//             <h1>Welcome back, {user.name}!</h1>
//             <p>Here's what's happening with your courses today.</p>
//           </div>

//           <div className="stats-grid">
//             <div className="stat-card">
//               <div className="stat-icon">📚</div>
//               <div className="stat-info">
//                 <h3>{stats.enrolledCourses}</h3>
//                 <p>Enrolled Courses</p>
//               </div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-icon">⏰</div>
//               <div className="stat-info">
//                 <h3>{stats.pendingAssignments}</h3>
//                 <p>Pending Assignments</p>
//               </div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-icon">✅</div>
//               <div className="stat-info">
//                 <h3>{stats.completedAssignments}</h3>
//                 <p>Completed</p>
//               </div>
//             </div>
//           </div>

//           <div className="dashboard-sections">
//             <div className="section">
//               <h2>Recent Courses</h2>
//               <div className="course-list">
//                 {courses.map((course) => (
//                   <div key={course.id} className="course-card">
//                     <div className="course-image">
//                       <img src={course.image} alt={course.title} />
//                     </div>
//                     <div className="course-info">
//                       <h3>
//                         {course.title.length > 30
//                           ? ${course.title.substring(0, 30)}...
//                           : course.title}
//                       </h3>
//                       <p>${course.price}</p>
//                       <div className="progress-bar">
//                         <div
//                           className="progress"
//                           style={{
//                             width: ${Math.floor(Math.random() * 100)}%,
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <Link to="/courses" className="view-all">
//                 View All Courses →
//               </Link>
//             </div>

//             <div className="section">
//               <h2>Upcoming Assignments</h2>
//               <div className="assignments-list">
//                 {assignments.map((assignment) => (
//                   <div key={assignment.id} className="assignment-item">
//                     <div className="assignment-info">
//                       <h3>{assignment.title}</h3>
//                       <p>
//                         Due:{' '}
//                         {new Date(
//                           Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000
//                         ).toLocaleDateString()}
//                       </p>
//                     </div>
//                     <div
//                       className={`assignment-status ${
//                         assignment.completed ? 'completed' : 'pending'
//                       }`}
//                     >
//                       {assignment.completed ? 'Completed' : 'Pending'}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <Link to="/assignments" className="view-all">
//                 View All Assignments →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
