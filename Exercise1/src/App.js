import React from 'react';

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;
  return (
    <div>
      <p>React Components</p>
      <p>Current Year: {currentYear}</p>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default App;