import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Product = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p><FontAwesomeIcon icon={faEnvelope} /> Email: example@example.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> Phone: +1 234 567 890</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 123 Street, City, Country</p>
      </div>
    </div>
  );
};

export default Product;
