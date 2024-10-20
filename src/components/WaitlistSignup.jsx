import React, { useState } from 'react';
import './WaitlistSignup.css';

const WaitlistSignup = () => {
  const [email, setEmail] = useState('');
  const [submittedEmails, setSubmittedEmails] = useState([]); 
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (submittedEmails.includes(email)) {
      setError('This email has already been submitted.');
    } else {
      setSubmittedEmails([...submittedEmails, email]);
      setIsSubmitted(true);
      setError('');
      setEmail('');
    }
  };

  return (
    <div id="waitlist-section" className="signup-container">
      {!isSubmitted ? (
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="meow-meow">Join the Waitlist</h2>
          <input 
            type="email"
            className="signup-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="thank-you-message">
          <button className="submit-btn">Thank You!</button>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default WaitlistSignup;
