import React , { useEffect, useState } from 'react';
import axios from 'axios';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/contact/all');
        setMessages(res.data);
      } catch (err) {
        console.error('Error fetching messages:', err);
      }
    };

    fetchMessages();
  }, []);

  return (
    <section className="admin-messages" style={{ padding: '80px 24px' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>All Contact Messages</h2>
      <div style={{ maxWidth: '800px', margin: '40px auto' }}>
        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              style={{
                border: '1px solid #ccc',
                padding: '16px',
                borderRadius: '8px',
                marginBottom: '16px',
                backgroundColor: '#f9fafb'
              }}
            >
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>
                Sent: {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default AdminMessages;
