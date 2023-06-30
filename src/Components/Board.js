import React, { useState } from 'react'
import Square from './Square'

const Board = () => {

    const [state, setState] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)

    const logic = () => {
        const square = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let box of square) {
            const [a, b, c] = [...box]
            if (state[a] != null && state[a] === state[b] && state[b] === state[c]) {
                return state[a]
            }
        }
        return false
    }

    const isWinner = logic()

    var handleClick = (index) => { // Escape OverLapping
        if (state[index] != null) {
            return;
        }

        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState)
        setIsXTurn(!isXTurn)

    }
    const reset = () => { //resets all square
        setState(Array(9).fill(null))
    }


     return (
        <>
            <div className="container m-5 d-flex flex-column align-items-center">
                <h1> Welcome to Tic Tac Toe</h1>
                
                    <>
                            <h4 className='text-info m-3'>{`${isXTurn ? "X" : "O"} Move`}</h4>
                           <div>
                           <div className="container d-flex  align-items-center">
                                <Square value={state[0]} SquareValue={() => handleClick(0)} />
                                <Square value={state[1]} SquareValue={() => handleClick(1)} />
                                <Square value={state[2]} SquareValue={() => handleClick(2)} />
                            </div>
                            <div className="container d-flex  align-items-center">
                                <Square value={state[3]} SquareValue={() => handleClick(3)} />
                                <Square value={state[4]} SquareValue={() => handleClick(4)} />
                                <Square value={state[5]} SquareValue={() => handleClick(5)} />
                            </div>
                            <div className="container d-flex  align-items-center">
                                <Square value={state[6]} SquareValue={() => handleClick(6)} />
                                <Square value={state[7]} SquareValue={() => handleClick(7)} />
                                <Square value={state[8]} SquareValue={() => handleClick(8)} />
                            </div>
                           </div>
                           <div className='container'>
                            <h1 className='text-primary'>{isWinner?`${isWinner} won`:``}</h1>
                            <button className="btn btn-outline-success" onClick={reset}>Reset</button>
                        </div>
                        </>
            </div>

                      
        </>
    )
}

export default Board