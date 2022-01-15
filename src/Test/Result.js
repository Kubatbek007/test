import React from 'react'
import {NavLink} from "react-router-dom"
import {Button} from "react-bootstrap";

export const Result = (props) => {
    return (
        <div className="result-wrapper">
            <h2 className="result-title">ПРАВИЛЬНЫЕ ОТВЕТЫ:</h2>
            <div className="result-count">{props.result}</div>
            <NavLink to="/"><Button
                onClick={props.getResult}
                variant="primary" size="lg" active>
                РЕСТАРТ</Button></NavLink>
        </div>
    )
}