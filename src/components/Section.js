import React from 'react';
import Container from 'react-bootstrap/Container';
import Headshot from '../assets/images/headshot.png';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Section() {
  return (
    <div className="mt-5">
      <Container>
        <Card>
          <Row>
            <Col xs={2}>
              <Image className="headshot" src={Headshot} />
            </Col>
            <Col xs={10}>
              <Card.Body>
                <h4 className="mt-2">Hey There!</h4>
                <p>
                  My name is Michael Fischer, and I'm a Full Stack Web Developer
                  (in training) based in San Antonio, TX. When I’m not behind a
                  computer, you can find me scuba diving at the lake, out
                  hiking, or hanging out with my cats. Check out some of my work
                  below, along with my resume and other ways to contact me!
                </p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Section;
