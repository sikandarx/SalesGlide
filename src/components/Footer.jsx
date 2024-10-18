import React, { useState } from 'react';
import Logo from '../assets/logo.png'
import Form from './Form';
function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
    return (
      <>
       <div id="footer">
       <div className="container">
          <div className='d-flex ft'>
          <img src={Logo} alt=" " className="logo2"/>
          <div className='mbtn' onClick={openForm}>
              Book a Free Strategy Session
          </div>
          </div>
          <div className="crh"></div>
          <div className="cr">Copyright © 2024 Sales Glide.</div>
        </div>
        </div>
        <Form isOpen={isFormOpen} onClose={closeForm} />
      </>
    );
  }
  
  export default Footer;