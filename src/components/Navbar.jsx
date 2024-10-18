import Logo from '../assets/logo.png'
import React, { useState, useEffect } from 'react';

function Navbar() {
    const scrollToComponent = (componentId) => {
      const component = document.getElementById(componentId);
      if (component) {
        component.scrollIntoView({ behavior: 'smooth' });
      }
    };
      

      const [showDropdown, setShowDropdown] = useState(false);
    
      const toggleDropdown = () => {
        console.log('Toggling dropdown');
        setShowDropdown(prevState => !prevState);
      };
    
      const hideDropdownOnResize = () => {
        if (window.innerWidth > 768) {
          console.log('Hiding dropdown on resize');
          setShowDropdown(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('resize', hideDropdownOnResize);
        return () => {
          window.removeEventListener('resize', hideDropdownOnResize);
        };
      }, []);
    
      console.log('Rendered with showDropdown:', showDropdown);
  
    return (
      <>
      <nav className='container mnav d-flex n'>
            <img src={Logo} alt='logo' className='logo1'/>
            <div className='d-flex navb'>
            <div className='bton' onClick={() => scrollToComponent('home')}>
              Home
            </div>
            <div className='bton' onClick={() => scrollToComponent('aboutus')}>
              About Us
            </div>
            <div className='bton' onClick={() => scrollToComponent('services')}>
              Services
            </div>
            <div className='bton' onClick={() => scrollToComponent('process')}>
              Process
            </div>
            </div>
      </nav>
      </>
    );
  }
  
  export default Navbar;