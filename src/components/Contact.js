import React from 'react';
import { Container } from 'react-bootstrap';

function Contact() {
  return (
    <div className="mt-5 w-75 container bg-dark  text-light">
      <Container>
        <h3 className="py-4 fw-bold">Contact Me</h3>
        <div className="bg-dark mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputFN"
            placeholder="First Name"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputLN"
            placeholder="Last Name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Send Me A Message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary mb-4">
          Submit
        </button>
      </Container>
    </div>
  );
}

export default Contact;
