import React from 'react';
import Headshot from '../assets/images/headshot.png';
import UTSA from '../assets/images/utsa.png';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { Card, Row } from 'react-bootstrap';
import tech from '../tech';
import 'bootstrap/dist/css/bootstrap.min.css';

function Section() {
  return (
    <div className="mt-5 w-75 container bg-dark my-5 pb-5 text-light">
      <Row>
        <Col sm={12} md={5} lg={4} xl={3} my={3}>
          <Image
            roundedCircle
            className="py-4 px-2 pb-sm-0 img-responsive w-80"
            src={Headshot}
          />
        </Col>
        <Col>
          <Card.Body className="my-lg-3 col-9 col-md-12 col-sm-12 my-sm-0 w-100">
            <Card.Title className="fs-2"> Hey There!</Card.Title>
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

      <Row>
        <Card className="bg-dark my-5 border-0 px-5">
          <Card.Title className="my-2 fs-2">Technologies</Card.Title>
          <Col>
            <div className="grid-container vertical-line"></div>
          </Col>
        </Card>
      </Row>

      <Row>
        <Card className="bg-dark my-5 border-0 px-5">
          <Card.Title className="my-2 fs-2"> Certification</Card.Title>
          <Col>
            <Image className="my-4" src={UTSA} width={200} />
          </Col>
          <Col>
            <Card.Text>
              University of Texas San Antonio Full Stack Web Development
              Certification
            </Card.Text>
          </Col>
        </Card>
      </Row>
    </div>
  );
}

export default Section;
