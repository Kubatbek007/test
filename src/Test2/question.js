import React from "react";
import "../Test2/app.css"
import {NavLink, Route} from "react-router-dom";
import {Button} from "react-bootstrap";

function QueStion(props) {
    return (
        <Route exact path={props.path}>
            <div className="test-wrapper1">
                <h2 className="question-title"><span>{props.qNumber}</span>{props.question}</h2>
                <div className="question-inputs">
                    <input
                        onClick={(e) => props.getAnswer(e)}
                        className="question-input" type="radio" id="q1" name="q1" value={props.value1} />
                    <label htmlFor="q1">{props.var1}</label>
                </div>
                <div className="question-inputs">
                    <input
                        onClick={(e) => props.getAnswer(e)}
                        className="question-input" type="radio" id="q2" name="q1" value={props.value2} />
                    <label htmlFor="q2">{props.var2}</label>
                </div>
                <div className="question-inputs">
                    <input
                        onClick={(e) => props.getAnswer(e)}
                        className="question-input" type="radio" id="q3" name="q1" value={props.value3} />
                    <label htmlFor="q3">{props.var3}</label>
                </div>
                <div className="question-button">
                    <NavLink to={props.link}>
                        <Button
                            variant="primary" size="lg" active
                            onClick={props.getReset}
                        >{props.next}</Button></NavLink>
                </div>
            </div>
        </Route>
    )
}

export default QueStion;