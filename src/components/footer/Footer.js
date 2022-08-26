import React from 'react';
import './footer.css';



const Footer = () => {
  return(
  <footer>
    <div className='footer-text'>
      <p> Contact </p>
      <a href="mailto:pouet@pouetmail.com"> pouet@pouetmail.com</a>
      <p>cgr</p>
    </div>
    <div className='footer-icons'>
    
    <i class="fa-brands fa-github"></i>
    <i class="fa-brands fa-facebook"></i>
    </div>
  </footer>
);
}
export default Footer;