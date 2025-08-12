import React from 'react';
import footerLogo from '../../assets/images/footer-logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">		
        <div className="row">
          <div className="col-md-4">
            <img className="footer-logo" src={footerLogo} alt="Footer Logo" />
            <p>
              Experience top-tier delivery with <br />
              Vero1 express services. Enjoy  <br />
              unmatched speed, reliability for all  <br />
              your delivery needs.
            </p>
            <ul className="social">
              <li><a className="fb" ><i className="fab fa-facebook"></i></a></li>
              <li><a className="tw" ><i className="fab fa-twitter"></i></a></li>
              <li><a className="link" ><i className="fab fa-linkedin"></i></a></li>
            </ul>			
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <h4>Company</h4>
                <ul>
                  <li><a className='text-white' >About Us</a></li>
                  <li><a className='text-white'>Terms of Use</a></li>
                  <li><a className='text-white'>Privacy Policy</a></li>
                  <li><a className='text-white'>How it Works</a></li>
                  <li><a className='text-white'>Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Get Help</h4>
                <ul>
                  <li><a className='text-white'>Support Center</a></li>
                  <li><a className='text-white'>24/7 Service</a></li>
                  <li><a className='text-white'>Quick Chat</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Support</h4>
                <ul>
                  <li><a className='text-white'>FAQs</a></li>
                  <li><a className='text-white'>Policies</a></li>
                  <li><a className='text-white'>Business</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Contact</h4>
                <ul>
                  <li><a className='text-white'>WhatsApp</a></li>
                  <li><a className='text-white'>Support 24/7</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <address>Copyright © 2024 Vero1 Express. All Rights Reserved</address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
