import React from 'react';
import { Card, Row } from 'react-bootstrap';
import project from '../project';
import ProjectCards from './projectCards';

function Portfolio() {
  return (
    <Row>
      <Card className="bg-dark my-5 border-0 px-5 ">
        <Card.Title className="fw-bold my-2 fs-2">Apps</Card.Title>
        <div className="grid-container d-flex flex-wrap">
          {project.map((pro) => (
            <ProjectCards
              key={pro.id}
              id={pro.id}
              github={pro.github}
              site={pro.site}
              name={pro.name}
              image={pro.image}
            />
          ))}
        </div>
      </Card>
    </Row>
  );
}

export default Portfolio;
