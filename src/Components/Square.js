import React from 'react'

function Squre(props) {
    return (
        <div
            onClick={props.SquareValue}
            className="container border border-danger d-flex justify-content-evenly align-items-center" style={{
                width: "100px",
                height: "100px",
                margin: "0"
            }}>
            <h1>{props.value}</h1>
        </div>)
}



export default Squre