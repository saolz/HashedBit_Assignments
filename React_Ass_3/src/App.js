import React, { useState } from 'react';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question1: '',
    question2: '',
    question3: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      question1: '',
      question2: '',
      question3: '',
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #333', borderRadius: '5px', backgroundColor: '#222', color: '#fff' }}>
      <h2 style={{ textAlign: 'center', color: '#fff' }}>SURVEY FORM</h2>
      <p style={{ marginBottom: '20px' }}>We would love to hear your thoughts and suggestions. Please fill in the form below.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="name" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ padding: '8px', borderRadius: '3px', border: '1px solid #333', backgroundColor: '#444', color: '#fff' }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="email" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ padding: '8px', borderRadius: '3px', border: '1px solid #333', backgroundColor: '#444', color: '#fff' }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="question1" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Question 1: Do you enjoy our product? What do you suggest?</label>
          <textarea
            id="question1"
            name="question1"
            value={formData.question1}
            onChange={handleChange}
            required
            style={{ padding: '8px', borderRadius: '3px', border: '1px solid #333', backgroundColor: '#444', color: '#fff', resize: 'vertical', minHeight: '80px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="question2" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Question 2: How was your experience? What do you suggest?</label>
          <textarea
            id="question2"
            name="question2"
            value={formData.question2}
            onChange={handleChange}
            required
            style={{ padding: '8px', borderRadius: '3px', border: '1px solid #333', backgroundColor: '#444', color: '#fff', resize: 'vertical', minHeight: '80px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="question3" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Question 3: Do you have any comments? What do you suggest?</label>
          <textarea
            id="question3"
            name="question3"
            value={formData.question3}
            onChange={handleChange}
            required
            style={{ padding: '8px', borderRadius: '3px', border: '1px solid #333', backgroundColor: '#444', color: '#fff', resize: 'vertical', minHeight: '80px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;