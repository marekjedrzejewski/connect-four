import './Board.scss';

function Board ({horizontalFields=7, verticalFields=6}) {

    return (
        <div className='board'>
            {[...Array(horizontalFields)].map(() => <Column />)}
        </div>
    )
}

function Column ({verticalFields=6}) {
    return (
        <div className='column'>
            {[...Array(verticalFields)].map((el, i) => <Cell content={i}/>)}
        </div>
    )
}

function Cell ({content}) {
    return (
        <div className='cell'>
            {content}
        </div>
    )
}

export default Board;