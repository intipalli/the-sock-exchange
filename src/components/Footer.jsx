import React from 'react';
import '../index.css';

const Footer = ({ environment }) => {

  const backgroundClass = environment.toLowerCase() === 'development' ? 'bg-yellow' : 'bg-green';
  const footerText = backgroundClass === 'bg-yellow' ? 'DEVELOPMENT' : 'PRODUCTION'; 
  return (
    <footer className={`${backgroundClass} footer`}>
      <p>{footerText}</p>
    </footer>
  );
};

export default Footer;