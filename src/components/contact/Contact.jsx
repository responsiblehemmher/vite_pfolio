import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="d-flex align-items-center mt-5 justify-content-center flex-column pb-3">
      <div className="mt-4 mb-3 vietnamPro">
        <span className="py-2 px-2 bg-success text-light">Get</span>
        <span className="py-1 px-2" style={{ borderBottom: '4px solid orange' }}>In Touch</span>
      </div>
      <p className="text-center">
        I welcome new opportunities. For new projects or collaboration, my inbox is always open. I will definitely get back to you.
      </p>
      <div className="d-flex justify-items-center align-items-center">
        <a style={{ textDecoration: 'none' }} href="https://api.whatsapp.com/send?phone=+2348137091375" className="text-dark" target="_blank">
          <span className="px-2 py-1 color-button vietnamPro">Let's connect</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
