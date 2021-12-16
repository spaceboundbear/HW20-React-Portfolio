import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar />
      <Card>
        <Header />
        <Section />
      </Card>
      <Footer />
    </div>
  );
}

export default App;
