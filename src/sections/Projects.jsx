import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeInWrapper from "../components/FadeInWrapper";
import axios from "axios";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("https://portfolio-backend-xlar.onrender.com/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <FadeInWrapper>
          <p className="status-msg">Loading projects...</p>
        </FadeInWrapper>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="projects-section">
        <FadeInWrapper>
          <p className="status-msg" style={{ color: "#f87171" }}>
            {error}
          </p>
        </FadeInWrapper>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <FadeInWrapper>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project._id || index}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.technologies?.length > 0 && (
                <ul className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              )}
              <div className="project-buttons">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn secondary"
                  >
                    View Code
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn primary"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </FadeInWrapper>
    </section>
  );
};

export default Projects;
