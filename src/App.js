import { useState } from 'react';
import './App.scss';
import Board from './components/Board.js'

export const CoinColors = {
  Red: 'red',
  Yellow: 'yellow'
}

function App() {
  const columns = 7
  const height = 6
  const [currentCoin, changeColor] = useState(CoinColors.Yellow)
  const [board, setBoard] = useState(Array(columns).fill([]))

  function putCoinInColumn(column) {
    if (board[column].length == height) {
      return
    }

    const newBoard = []
    for (let col in board) {
      newBoard.push(board[col].slice())
    }
    newBoard[column].push(currentCoin)
    changeColor(currentCoin === CoinColors.Red? CoinColors.Yellow : CoinColors.Red)
    setBoard(newBoard)
  }

  return (
    <div className="App">
      <Board board={board} height={height} putCoin={putCoinInColumn} />
    </div>
  );
}

export default App;
