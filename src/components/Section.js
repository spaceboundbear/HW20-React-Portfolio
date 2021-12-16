import React from 'react';
import Headshot from '../assets/images/headshot.png';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Section() {
  return (
    <div className="mt-5 w-75 container bg-secondary w-sm-100 my-5">
      <Row>
        <Col sm={12} md={5} lg={4} xl={3} my={3}>
          <Image
            roundedCircle
            className="py-4 px-2 img-responsive"
            src={Headshot}
          />
        </Col>
        <Col>
          <Card.Body className="my-3 col-9 col-sm-12">
            <Card.Title>Hey There!</Card.Title>
            <Card.Text>
              My name is Michael Fischer, and I'm a Full Stack Web Developer (in
              training) based in San Antonio, TX. When I’m not behind a
              computer, you can find me scuba diving at the lake, out hiking, or
              hanging out with my cats. Check out some of my work below, along
              with my resume and other ways to contact me!
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
}

export default Section;
