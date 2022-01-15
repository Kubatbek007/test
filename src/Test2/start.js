import React from "react";
import "../Test2/app.css"
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
function Start() {
    return (
        <div className="start-wrapper">
            <NavLink to="/1"><Button variant="primary" size="lg" active>Начать</Button></NavLink>
        </div>
    )
}

export default Start;