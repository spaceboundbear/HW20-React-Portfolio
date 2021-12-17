import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { Card, Col, Image } from 'react-bootstrap';

function ProjectCards(props) {
  return (
    <Col>
      <Card className="border-0 grid-item d-flex bg-dark flex-row text-center">
        <Card.Body>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'white' }}
            href={props.site}
          >
            <Image width={300} height={169} src={props.image} />
          </a>
          <Card.Text>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'white' }}
              href={props.site}
            >
              <h4 className="mt-2">
                {props.name}
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
              </h4>
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCards;
