import React from 'react';
import background from './background.png'

function App() {
  const value = 'Sachverständiger Thomas Kimpel';
  return 
    <div style={{ width: `1024px`, height: `768px`, backgroundImage: `url(${background})` }}>
      <div style={{ position: 'absolute', marginLeft: `450px`, marginTop: `200px`, color: `#ffffff`, fontWeight: 'bold' }}>Willkommen bei {value}</div>
    </div>;
}

export default App;
