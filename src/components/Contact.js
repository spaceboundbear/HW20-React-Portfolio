import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Validate } from '../utils/helper';
import { Form, Button } from 'react-bootstrap';

function FormState() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [form, setForm] = useState('');

  function handleValidate(e) {
    if (e.target.name === 'email') {
      const valid = Validate(e.target.value);
      if (!valid) {
        setForm('Please Enter a Valid Email Address');
      } else {
        setForm('');
      }
    } else {
      if (!e.target.value.length) {
        const name = e.target.name;
        setForm(
          `Please Enter a ${name.charAt(0).toUpperCase() + name.slice(1)}`
        );
      } else {
        setForm('');
      }
    }
    if (!form) {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }

  return (
    <div className="mt-5 w-75 container bg-dark text-light">
      <Container>
        <h3 className="py-4 fw-bold">Contact Me</h3>

        <Form className="">
          <Form.Group controlId="name" className="my-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              required
              name="name"
              placeholder="Name"
              onBlur={handleValidate}
            />
          </Form.Group>

          <Form.Group controlId="email" className="my-3">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="example@email.com"
              onBlur={handleValidate}
            />
          </Form.Group>

          <Form.Group controlId="message" className="my-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              name="message"
              as="textarea"
              rows="5"
              placeholder="Send a Message"
              onBlur={handleValidate}
            />
          </Form.Group>

          {form && <p className="form-message">{form}</p>}

          <Button type="submit" className="btn my-3">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default FormState;
