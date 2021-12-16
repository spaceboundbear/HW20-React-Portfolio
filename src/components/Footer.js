import React from 'react';

function Footer() {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 footer fixed-bottom">
      <div className="container text-center mb-5">
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the Tech Thoughts team.
        </h4>
      </div>
    </footer>
  );
}

export default Footer;

// https://react-bootstrap.netlify.app/components/cards/#header-and-footer
