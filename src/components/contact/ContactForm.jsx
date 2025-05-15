// src/components/contact/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    codeapogee: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.codeapogee) {
      alert('Code Apogée is required.');
      return;
    }

    const existingMessages = JSON.parse(localStorage.getItem('messages') || '[]');
    existingMessages.push(formData);
    localStorage.setItem('messages', JSON.stringify(existingMessages));

    alert('Message submitted successfully!');
    setFormData({
      email: '',
      name: '',
      codeapogee: '',
      message: '',
    });
  };

  return (
    <><main>
        <h2>Contactez-nous</h2>
        <p>CLUB CINÉMA BEN M'SICK est fier de recueillir votre opinion et de vous accueillir sur notre email !</p>
        <section className="main-section ">
        <form id="contact-form" onSubmit={handleSubmit} >
          <label htmlFor="email">Email</label>
          <input
          className="contact-form"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
          <label htmlFor="name">Nom</label>
          <input
          className="contact-form"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required />
          <label htmlFor="codeapogee">Code Apogée</label>
          <input
          className="contact-form"
            type="number"
            id="codeapogee"
            name="codeapogee"
            value={formData.codeapogee}
            onChange={handleChange}
            required />
          <label htmlFor="message">Message</label>
          <textarea
          className="contact-form"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required />
            <div> <button type="submit" className='buttonsubmit'>Envoyer</button></div>
         
        </form>
         </section>
      </main></>
  );
};

export default ContactForm; 