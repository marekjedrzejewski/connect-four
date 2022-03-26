import './Board.scss';
import { CoinColors } from '../App'

function Board({ board, height, currentCoin, putCoin }) {

    return (
        <div className={`board ${currentCoin}-turn`}>
            {[...Array(board.length)].map(
                (el, i) =>
                    <Column
                        key={i}
                        height={height}
                        column={board[i]}
                        columnIndex={i}
                        putCoin={putCoin}
                    />
            )}
        </div>
    )
}

function Column({ column, columnIndex, putCoin, height }) {
    function columnClick(event) {
        putCoin(event.currentTarget.dataset.column)
    }

    return (
        <div className='column' data-column={columnIndex} onClick={columnClick}>
            {[...Array(height)].map(
                (el, i) =>
                    <Cell key={i} content={column[i] || 'empty'} />
            )}
        </div>
    )
}

function Cell({ content }) {
    return (
        <div className={`cell ${content}`} />
    )
}

export default Board;