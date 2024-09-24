import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: "TeleMobility",
      description: "Telemedicine web app for neuro-rehabilitation clinic. Monitors motor disorders like falls and gait freezing. Features: user authentication, patient data management, disorder logging, medical record access, therapy management, data filtering, and analysis. For clinicians, patients, and admins. Streamlines remote monitoring and therapy adjustments.",
      imageUrl: "/Immagini/Telemobility_.png",
      link: "https://github.com/jackw1-tech/TeleMobility",
      iconNames: ['laravel', 'html5', 'css3', 'php', 'js'],
      videoUrl: "null"
    },
    {
      title: "TeamSynch",
      description: "TeamSync is an app designed to manage communication and organization within a project team. It allows users to create projects, assign tasks, send notifications, and keep track of workflow. The goal was to develop a simple yet functional app that can be easily extended and maintained over time.",
      imageUrl: "/Immagini/TeamSynch.png",
      link: "https://github.com/kalifeli/TeamSync",
      iconNames: ['flutter', 'dart-lang', 'android', 'kotlin'],
      videoUrl: "null"
    },
    {
      title: "BudgetNest",
      description: "BudgetNest is an innovative platform designed to simplify financial management for families, providing an organized, secure, and transparent environment for budgeting. The platform is intended to meet the needs of both personal and family budgeting, offering various features to optimize daily finances.",
      imageUrl: "/Immagini/BudGetNest.png",
      link: "https://github.com/jackw1-tech/BudgetNest",
      iconNames: ['django', 'html5', 'css3', 'python', 'js'],
      videoUrl: "null"
    },
    {
      title: "My Personal Website",
      description: "This is my personal portfolio website, showcasing my projects. Built using modern technologies to deliver a fast, responsive experience.",
      imageUrl: "/Immagini/MyPersonalWebSite.png",
      link: "https://github.com/jackw1-tech/Personal-WebSite",
      iconNames: ['react', 'bootstrap', 'html5', 'css3', 'firebase'],
      videoUrl: "null"
    }
  ];

  return (
    <section className="py-5">
      <div className="container mb-5 justify-content-center">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0 project">
            <span className="text-gradient d-inline">Projects</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-xl-12 col-xxl-11 col-sm-12 col-md-12 col-lg-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
                iconNames={project.iconNames}
                videoUrl={project.videoUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

