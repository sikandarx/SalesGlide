import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import Logo from '../assets/logo.png';

const Form = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    website: '',
    email: '',
    phoneNumber: '',
  });

  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.fullName && formData.website && formData.email && formData.phoneNumber) {
      // Create the message content
      const message = `
        Name: ${formData.fullName}
        Website: ${formData.website}
        Email: ${formData.email}
        Phone Number: ${formData.phoneNumber}
      `;

      const emailData = {
        name: formData.fullName,
        message: message
      };

      // Use EmailJS to send the form data
      emailjs.send('service_gokg4ub', 'template_x7w70hp', emailData, 'm3I9glLucy2U087ts')
        .then((response) => {
          console.log('Email sent successfully:', response.status, response.text);
          onClose();
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
        });
    } else {
      console.error('All fields are mandatory');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='frmb'>
      <div className='infrm' ref={formRef}>
        <div className='imgf'>
          <img src={Logo} alt='Logo' className='logo3' />
        </div>
        <div className='hdn'>Optimize your success!</div>
        <div className='prn'>
          Say goodbye to wasted time and money on ineffective ad campaigns. 
          Transform your ad-budget into real results, scale your business, and skyrocket your 
          sales!
        </div>
        <button type="button" className='cros' onClick={onClose}>&#10006;</button>
        <form onSubmit={handleSubmit} className='frm'>
          <div className='mt-3 mb-3'>
            <label>
              Full Name<span className='text-danger'> *</span>
            </label>
            <br />
            <input
              className='inp'
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder='Enter Full Name'
              required
            />
          </div>
          <br />
          <div className='mt-3 mb-3'>
            <label>
              Website<span className='text-danger'> *</span>
            </label>
            <br />
            <input
              className='inp'
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              placeholder='Web URL goes here'
              required
            />
          </div>
          <br />
          <div className='mt-3 mb-3'>
            <label>
              Email<span className='text-danger'> *</span>
            </label>
            <br />
            <input
              className='inp'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Enter Email'
              required
            />
          </div>
          <br />
          <div className='mt-3 mb-3'>
            <label>
              Phone Number<span className='text-danger'> *</span>
            </label>
            <br />
            <input
              className='inp'
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder='Enter Phone Number'
              required
            />
          </div>
          <br />
          <button type="submit" className='btn btn-success sbmt'>Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
