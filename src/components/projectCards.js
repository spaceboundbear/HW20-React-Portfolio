import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { Card, Col, Image } from 'react-bootstrap';

function ProjectCards(props) {
  return (
    <Col>
      <Card className="border-0 grid-item d-flex bg-dark flex-row text-center">
        <Image src={props.image} />
        <Card.Body>
          <Card.Text>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'white' }}
              href={props.site}
            >
              <p>{props.name}</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'white' }}
              href={props.github}
            >
              <h3>
                <AiFillGithub />
              </h3>
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCards;
