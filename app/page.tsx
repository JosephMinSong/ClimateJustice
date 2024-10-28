'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log("Hello")
    fetch('http://127.0.0.1:5000/api/seattle_weather')
        .then(res => res.json())
        .then(data => setMessage(data.message));
  }, []);

  return (
      <div>
          <h1>Hello from Next.js!</h1>
          <p>{message}</p>
      </div>
  );
}