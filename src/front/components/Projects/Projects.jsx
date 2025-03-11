import React from 'react';
import './Projects.css'; // Подключаем стили

const Projects = () => {
  return (
    <div className="projects">
      <h2>Наши проекты</h2>
      <div className="project-cards">
        <div className="project-card">
          <img src="/img/products/bg5.jpg" alt="Проект 1" width="162" height="110" />
          <div className="project-description">
            <p>Описание проекта 1</p>
          </div>
        </div>
        <div className="project-card">
          <img src="/img/products/bg5.jpg" alt="Проект 2" width="162" height="110" />
          <div className="project-description">
            <p>Описание проекта 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
