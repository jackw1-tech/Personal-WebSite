import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const AboutSection = () => {
  return (
    <Row className="text-center flex-grow-1 d-flex align-items-center justify-content-center">
      <Col className="align-items-center">
        <h1 className="ScrittaGrande">Bianco Giacomo</h1>
        <h2 className="ScrittaPiccola padding-x">I'm a Software Developer</h2>

        <div className="margin-top border-purple">
          <a
            href="https://www.linkedin.com/in/tuo-profilo"
            className="mx-3 icon-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/tuo-username"
            className="mx-3 icon-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/tuo-username"
            className="mx-3 icon-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default AboutSection;
