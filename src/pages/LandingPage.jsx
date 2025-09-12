// src/pages/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Pathfinder</h1>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Discover Your Learning Path</h1>
            <p>
              Pathfinder helps you navigate your educational journey with
              personalized courses, assignments, and progress tracking.
            </p>
            <Link to="/signup" className="cta-button">
              Get Started
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Learning"
            />
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose Pathfinder?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Wide Course Selection</h3>
              <p>
                Access hundreds of courses across various disciplines and skill
                levels.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>
                Monitor your learning journey with detailed analytics and
                progress reports.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Expert Instructors</h3>
              <p>
                Learn from industry professionals with years of experience in
                their fields.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>
                Access your courses and assignments from any device, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <h2>About Pathfinder</h2>
            <p>
              Pathfinder is a modern learning platform designed to help students
              and professionals achieve their educational goals. Our platform
              provides a seamless learning experience with intuitive navigation,
              comprehensive course materials, and robust tracking tools.
            </p>
            <p>
              Founded in 2025, our mission is to make quality education
              accessible to everyone, regardless of their background or
              location.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Pathfinder</h3>
              <p>Your guide to knowledge and skills development.</p>
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: info@pathfinder.com</p>
              <p>Phone: 08069558239</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Pathfinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
