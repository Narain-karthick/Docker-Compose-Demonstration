import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const fetchCount = () => {
    fetch('http://localhost:5000/api/count')
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  };

  useEffect(() => {
    fetchCount();
  }, []);

  const handleReset = () => {
    fetch('http://localhost:5000/api/reset', { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>React + Node + Redis Setup</h1>
      <h2>This page has been viewed <strong>{count}</strong> times!</h2>
      <button 
        onClick={handleReset} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Reset Counter
      </button>
    </div>
  );
}

export default App;