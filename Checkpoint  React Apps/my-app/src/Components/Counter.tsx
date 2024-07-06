
// src/Components/Counter.tsx
import React, { Component } from 'react';

// Définir le type de l'état
interface CounterState {
  count: number;
}

// Composant Counter
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  // Méthode pour incrémenter le compteur
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
