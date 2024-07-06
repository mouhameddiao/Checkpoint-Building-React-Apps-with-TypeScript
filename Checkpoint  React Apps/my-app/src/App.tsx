// src/App.tsx
import React from 'react';
import Greeting from './Components/Greeting';
import Counter from './Components/Counter';
import './styles.css';

// Composant principal de l'application
const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name="World" />
      <Counter />
    </div>
  );
};

export default App;
