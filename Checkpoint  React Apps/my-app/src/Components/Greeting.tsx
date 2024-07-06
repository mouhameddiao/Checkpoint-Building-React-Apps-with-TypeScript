// src/Components/Greeting.tsx
import React from 'react';

// Définir les props avec TypeScript
interface GreetingProps {
  name: string;
}

// Composant Greeting
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
