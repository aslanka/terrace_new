import React from 'react';
import './TestimonialCard.css';

function TestimonialCard({ name, quote }) {
  return (
    <div className="testimonial-card">
      <p>"{quote}"</p>
      <h4>- {name}</h4>
    </div>
  );
}

export default TestimonialCard;
