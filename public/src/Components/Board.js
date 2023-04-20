import React, { useState } from 'react'
import Square from './Squre'
import { useNavigate } from 'react-router-dom'

const Board = () => {

    const [state, setState] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)
    const navigate = useNavigate()

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

        // let winner = null
        for (let box of square) {
            const [a, b, c] = [...box]
            if (state[a] != null && state[a] === state[b] && state[b] === state[c]) {
                return true
                // winner = a
            }
        }
    }

    const isWinner = logic()
    if (!isWinner) {
        var handleClick = (index) => {
            const copyState = [...state];
            copyState[index] = isXTurn ? "X" : "O";
            // setState(copyState[index]); //? not working , bcoz now state(array) have only copyState(index)=x value that means state has x
            setState(copyState)
            setIsXTurn(!isXTurn)
        }
    }
    else{
        var handleClick = (index) => {
            // e.preventDefault()
            navigate('/')
        }
    }

    return (
        <>
            <div className="container m-5">
                <div className="container d-flex  align-items-center">
                    <Square SquareValue={() => handleClick(0)} value={state[0]} />
                    <Square SquareValue={() => handleClick(1)} value={state[1]} />
                    <Square SquareValue={() => handleClick(2)} value={state[2]} />
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
            <div className="container">
                {
                    isWinner && (
                        <>
                            <h1>{`winner`}</h1>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Board