import React, { useState, useEffect } from "react";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Using Fake Store API
        const response = await axios.get("https://fakestoreapi.com/products");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>${course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
