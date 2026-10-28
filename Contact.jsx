import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    setStatus('pending');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <div>
      <h2>Contact Us (Client-Side Form)</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '350px' }}>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>
        <label>
          Message:
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
            rows="4"
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>
        <button type="submit" disabled={status === 'pending'} style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          {status === 'pending' ? 'Submitting...' : 'Submit'}
        </button>
        {status === 'success' && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
      </form>
    </div>
  );
}