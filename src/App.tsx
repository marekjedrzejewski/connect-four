import { useEffect, useState } from 'react';
import './App.scss';
import Board from './components/Board'

export enum CoinColor {
  Red = 'red',
  Yellow = 'yellow'
}

function App() {
  const columns = 7
  const height = 6
  const neededToWin = 4

  const [currentCoin, changeColor] = useState<CoinColor>(CoinColor.Yellow)
  const [winner, setWinner] = useState<CoinColor | undefined>(undefined)
  const [board, setBoard] = useState(Array<Array<CoinColor>>(columns).fill([]))

  function putCoinInColumn(column: number) {
    if (winner || board[column].length === height) {
      return
    }

    const newBoard = []
    for (let col in board) {
      newBoard.push(board[col].slice())
    }
    newBoard[column].push(currentCoin)
    setBoard(newBoard)
    checkIfWon(column, newBoard[column].length - 1)
  }


  // will check for current color, so has to be called before changeColor
  // ...or maybe not. setBoard doesn't update board before calling this,
  // we're checking without last move in board
  function checkIfWon(col: number, row: number) {

    const found = checkInColumn(col, row) ||
      checkInRow(col, row) ||
      checkFirstDiagonal(col, row) ||
      checkSecondDiagonal(col, row)

    if (found) {
      setWinner(currentCoin)
    } else {
      changeColor(currentCoin === CoinColor.Red ? CoinColor.Yellow : CoinColor.Red)
    }
  }

  function checkInColumn(col: number, row: number) {
    // in column, we have to only go down
    let timesInCol = 1
    for (let y = row - 1; ; y--) {
      if (board[col][y] !== currentCoin) {
        break
      } else {
        timesInCol++
        if (timesInCol === neededToWin) {
          return true
        }
      }
    }
  }

  function checkInRow(col: number, row: number) {
    let timesInRow = 1
    // left
    for (let x = col - 1; ; x--) {
      if (board[x]?.[row] !== currentCoin) {
        break
      } else {
        timesInRow++
        if (timesInRow === neededToWin) {
          return true
        }
      }
    }
    // right
    for (let x = col + 1; ; x++) {
      if (board[x]?.[row] !== currentCoin) {
        break
      } else {
        timesInRow++
        if (timesInRow === neededToWin) {
          return true
        }
      }
    }
  }

  function checkFirstDiagonal(col: number, row: number) {
    let timesInDiagonal = 1
    // left
    for (let x = col - 1, y = row - 1; ; x--, y--) {
      if (board[x]?.[y] !== currentCoin) {
        break
      } else {
        timesInDiagonal++
        if (timesInDiagonal === neededToWin) {
          return true
        }
      }
    }
    // right
    for (let x = col + 1, y = row + 1; ; x++, y++) {
      if (board[x]?.[y] !== currentCoin) {
        break
      } else {
        timesInDiagonal++
        if (timesInDiagonal === neededToWin) {
          return true
        }
      }
    }
  }

  function checkSecondDiagonal(col: number, row: number) {
    let timesInDiagonal = 1
    // left
    for (let x = col - 1, y = row + 1; ; x--, y++) {
      if (board[x]?.[y] !== currentCoin) {
        break
      } else {
        timesInDiagonal++
        if (timesInDiagonal === neededToWin) {
          return true
        }
      }
    }
    // right
    for (let x = col + 1, y = row - 1; ; x++, y--) {
      if (board[x]?.[y] !== currentCoin) {
        break
      } else {
        timesInDiagonal++
        if (timesInDiagonal === neededToWin) {
          return true
        }
      }
    }
  }

  return (
    <div className={`App ${winner}`}>
      <Board board={board} height={height}
        currentCoin={currentCoin}
        putCoin={putCoinInColumn} />
    </div>
  );
}

export default App;
