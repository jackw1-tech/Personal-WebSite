import React, { useState } from 'react';
import './ProjectCard.css'; 

const ProjectCard = ({ title, description, imageUrl, link, iconNames, videoUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    if (videoUrl !== "null") {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
      <div className="card-body p-0">
        <div className="d-flex align-items-center">
          <div className="px-3 py-5">
            <h2 className="fw-bolder">{title}</h2>
            <p>{description}</p>
          
            <div className="icons-container align-items-center">
              {iconNames.map((iconName, index) => (
                <div key={index} className="border-git">
                  {iconName === 'kotlin' ? (
                    <img src="Icone/kotlin.svg" alt="Kotlin Icon" className="fa-2x nascondi" />
                  ) : iconName === 'django' ? (
                    <img src="Icone/django.svg" alt="Django Icon" className="fa-2x" />
                  ) : iconName === 'firebase' ? (
                    <img src="Icone/firebase.svg" alt="Firebase Icon" className="fa-2x nascondi" />
                  ) : (
                    <i className={`fab fa-${iconName} fa-2x`}></i>
                  )}
                </div>
              ))}
            </div>

            <div className="icons-container align-items-center top-margin">
              {link !== "null" && (
                <a href={link} className="mx-3 icon-git" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              )}
            </div>
          </div>

          <img
            className={`img-fluid ${videoUrl !== 'null' ? 'pulse' : ''}`}
            src={imageUrl}
            alt={title}
            onClick={videoUrl !== "null" ? handleImageClick : null}
          />
        </div>
      </div>

      {isModalOpen && videoUrl !== "null" && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <video className="modal-video muted" controls autoPlay>
              <source src={videoUrl} type="video/mp4" />
              Il tuo browser non supporta il video.
            </video>
            <button className="close-button" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

