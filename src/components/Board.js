import './Board.scss';

function Board({ board, verticalFields = 6 }) {

    return (
        <div className='board'>
            {[...Array(board.length)].map(
                (el, i) =>
                    <Column
                        key={i}
                        verticalFields={verticalFields}
                        column={board[i]}
                    />
            )}
        </div>
    )
}

function Column({ column, verticalFields = 6 }) {
    return (
        <div className='column'>
            {[...Array(verticalFields)].map((el, i) => <Cell key={i} content={column[i] || 'empty'} />)}
        </div>
    )
}

function Cell({ content }) {
    return (
        <div className={`cell ${content}`} />
    )
}

export default Board;