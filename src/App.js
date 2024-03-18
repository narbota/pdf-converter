import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <button className="btn" onClick={() => window.print()}
      >PDF converter
      </button>
    </div>
  );
}

export default App;