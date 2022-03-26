import './Board.scss';
import { CoinColor } from '../App'
import React, { ChangeEvent, MouseEventHandler, SyntheticEvent } from 'react';

function Board(
    { board, height, currentCoin, putCoin }:
        {
            board: Array<Array<CoinColor>>,
            height: number,
            currentCoin: CoinColor,
            putCoin: (column: number) => void
        }
) {
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

function Column(
    { column, columnIndex, putCoin, height }:
        {
            column: Array<CoinColor>,
            columnIndex: number,
            putCoin: (column: number) => void,
            height: number
        }
) {
    function columnClick(event: React.MouseEvent<HTMLDivElement>) {
        putCoin(Number(event.currentTarget.dataset.column))
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

function Cell({ content }: { content: CoinColor }) {
    return (
        <div className={`cell ${content}`} />
    )
}

export default Board;