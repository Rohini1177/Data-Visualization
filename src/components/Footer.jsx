import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    padding: '20px',
    textAlign: 'center',
    // position: 'fixed',
    bottom: 0,
    width: '100%',
    borderTop: '1px solid #e7e7e7'
  };

  const textStyle = {
    color: '#6c757d',
    fontSize: '14px'
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
