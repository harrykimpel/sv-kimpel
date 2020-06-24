import React from 'react';
import background from './background.png'

function App() {
  const value = 'Sachverständiger Thomas Kimpel';
  return <div style={{ backgroundImage:`url(${background})` }}>Willkommen bei {value}</div>;
}

export default App;
