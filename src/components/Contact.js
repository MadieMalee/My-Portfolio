import React, { useState } from 'react';
import { validateEmail } from '../utils/helper'; // Import your email validation function

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'userName') {
      setUserName(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or Name is invalid');
      return;
    }
    if (!message) {
      setErrorMessage('Message is required.');
      return;
    }
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <section id="contact-me" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Contact Info</h2>
      </div>
      <div className="contact-info">
        <div>
          <h3>Hello {userName}</h3>
          <p>Feel free to contact me!</p>
          <address>
            Dallas, TX <br />
            Cell: <a href="tel:318.228.0820">(318)228-0820</a>
            <br />
            Email: <a href="mailto://madie-v@live.com">madie-v@live.com</a>
          </address>
          <p>
            <strong>I'd love to hear from you!</strong>
          </p>
        </div>
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form" onSubmit={handleFormSubmit}>
            <label htmlFor="contact-name">Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />
            <label htmlFor="contact-email">Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />
            <label htmlFor="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
