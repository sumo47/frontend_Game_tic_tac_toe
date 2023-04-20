import React from 'react'

export default function Home(){
    return (
        <div>
            <h1>Token</h1>
            <p>{localStorage.getItem('x-api-key')}</p>
        </div>
    )
}