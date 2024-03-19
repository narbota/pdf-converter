import React from 'react';
import './App.css';


function App() {
  const convertToPdf = () => {
    window.print();
  };

  return (
    <div className="App">
      <button className="btn" onClick={convertToPdf}>
        Convert to PDF
      </button>
    
      
    </div>
  );
}

export default App;