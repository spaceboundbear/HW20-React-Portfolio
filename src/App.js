import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar />

      <Container>
        <Main />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
