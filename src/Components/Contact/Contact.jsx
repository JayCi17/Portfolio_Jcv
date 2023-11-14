import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Utilisez l'URL de votre formulaire Formspree
      const response = await axios.post('codes.jcv@gmail.com', formData);

      if (response.status === 200) {
        alert('Message envoyé avec succès!');
        // Effacez le formulaire après l'envoi
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.');
    }
  };

  return (
    <section id="contact">
        <div className="section-title">
            <h2>Me contacter</h2>
        </div>
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Envoyer</button>
    </form>
    </div>
    </section>
  );
};

export default ContactForm;
