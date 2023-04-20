import React from 'react'
import Nav from './Nav'
import Board from './Board'


export default function Game() {

    try {
        // console.log(localStorage.getItem("x-api-key"))
        if (localStorage.getItem("x-api-key")) {
            return (
                <>
                    <Nav />
                    <Board/>
                </>
            )
        }
        else {
            return (
                <h1>401 Unauthorized</h1>
            )
        }
    } catch (error) {
        console.log(error.message)
    }
}




