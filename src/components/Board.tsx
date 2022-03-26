import './Board.scss';
import { CoinColor } from '../App'
import { ChangeEvent, MouseEventHandler, SyntheticEvent } from 'react';

function Board({ board, height, currentCoin, putCoin }: any) {
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

function Column({ column, columnIndex, putCoin, height }: any) {
    function columnClick(event: any) {
        putCoin(parseInt(event.currentTarget.dataset.column))
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

function Cell({ content }: any) {
    return (
        <div className={`cell ${content}`} />
    )
}

export default Board;