import React from 'react';
import './index.css'

const Cart= () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        We are a passionate team of developers committed to creating awareness among the fitness and give the personal training about the exersises to get your body fit and for more details contact to the aboove given numbers
      </p>
      <div className="team-members">
        <h2>Meet Our Team</h2>
        <ul>
          <li>John Doe - Pyysical fitness</li>
          <li>Jane Smith - Trainer</li>
          {/* Add more team members */}
        </ul>
      </div>
      <p>
        Have questions or want to collaborate? Reach out to us at{' '}
        <a href="mailto:contact@example.com">contact@example.com</a>.
      </p>
    </div>
  );
};

export default Cart;