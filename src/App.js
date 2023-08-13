import React from "react";
import "./portfolio.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Marcus Alexander Skytt</h1>
        <p>Junior Product Owner | Designer | Software Enthusiast</p>
      </header>
      <section className="intro">
        <div className="intro-image">
          <img src="https://via.placeholder.com/300x400" alt="profile" />
        </div>
        <div classname="intro-text">
          <h2>Hello world!</h2>
          <p>
            I'm a technology enthusiast, currently employed in the position as
            Junior Product Owner at{" "}
            <a href="https://www.feriepartner.dk/">Feriepartner Danmark</a> a
            part of EDC-Gruppen, Denmark's largest and oldest real estate agency
            chain.
          </p>
        </div>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        {/* Map through your projects and display each project */}
        <div className="project">
          <h3>Health Tracking App</h3>
          <p className="project-description">
            An app that allows users to track their health and fitness.
          </p>
          <div className="project-image">
            <img src="https://via.placeholder.com/540x360" alt="project" />
          </div>
          <p className="project-date">Septemner, 2023</p>
          <p className="project-stack">React, Node</p>
          <a href="https://www.linkedin.com/in/mskytt/">View Project</a>
        </div>
        {/* Add more projects as needed */}
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Development</li>
          <li>Frontend: HTML, CSS, JavaScript</li>
          <li>Backend: Java, C#, Python</li>
          <li>UI/UX Design: Adobe XD, Axure RP</li>
          {/* Add more skills */}
        </ul>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me at{" "}
          <a href="mailto:marcusskytt@live.dk">marcusskytt@live.dk</a>.
        </p>
      </section>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Marcus Skyt. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
