import React from 'react';
import background from './background.png'

function App() {
  const value = 'Sachverständiger Thomas Kimpel';
  return 
    <div style={{ width:`1024px`, height:`768px`, heightbackgroundImage:`url(${background})` }}>
      <div style={{ marginLeft:`300px`, marginTop:`200px` }}>Willkommen bei {value}</div>
    </div>;
}

export default App;
