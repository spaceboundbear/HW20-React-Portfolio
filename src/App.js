import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar />

      <Container>
        <Section />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
