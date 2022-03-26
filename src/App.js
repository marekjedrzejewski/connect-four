import { useState } from 'react';
import './App.scss';
import Board from './components/Board.js'

function App() {
  const columns = 7
  const [board, setBoard] = useState(Array(columns).fill(['red', 'yellow']))

  return (
    <div className="App">
      <Board board={board}/>
    </div>
  );
}

export default App;
