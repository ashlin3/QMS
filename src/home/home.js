// HomePage.js
import React, { useState, useEffect } from 'react';
import Navbar from '../Nav/nav';

import './home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <header>
        <h1>Welcome to the Quality Management System</h1>
      </header>
      <main>
        <section className="section">
          <h2>About QMS</h2>
          <p>
            The Quality Management System (QMS) is a comprehensive tool for
            managing and maintaining the quality standards of our products and
            services.
          </p>
        </section>
        <section className="section">
          <h2>Features</h2>
          <ul>
            <li>Document Control</li>
            <li>Process Management</li>
            <li>Audits and Inspections</li>
            <li>Non-Conformance Tracking</li>
            <li>Performance Analytics</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Your QMS Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
