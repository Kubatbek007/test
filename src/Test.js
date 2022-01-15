import React, {useState}from "react";
import Start from "./Test/Start";
import Question from "./Test/Question";
import {Result} from "./Test/Result";
import "../src/Test/App.css";
import store from "./State/store";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import TestCss from "./TestCss";



const Test = () => {

    let [answer, setAnswer] = useState(0)
    let [flag, setFlag] = useState(0)
    let [result, setResult] = useState(0)

    const getAnswer = (event) => {
        if (event.target.value === 'yes') {
            if (flag === 0) {
                setAnswer(answer + 1)
                setFlag(flag + 1)
            } else {
                setAnswer(answer)
            }
        } else {
            if (flag !== 0) {
                setAnswer(answer - 1)
                setFlag(flag - 1)
            } else {
                setAnswer(answer)
            }
        }
    }

    const getReset = () => {
        setAnswer(0)
        setFlag(0)
        setResult(result + answer)
    }

    const getResult = () => {
        setAnswer(0)
        setFlag(0)
        setResult(0)
    }

    let questionsArray = store.questions.map((elem) =>
        <Question
            qNumber={elem.qNumber}
            question={elem.question}
            var1={elem.var1}
            var2={elem.var2}
            var3={elem.var3}
            value1={elem.value1}
            value2={elem.value2}
            value3={elem.value3}
            path={elem.path}
            link={elem.link}
            next={elem.next}
            getReset={getReset}
            getAnswer={getAnswer}
        />
    )

    return (

        <BrowserRouter>
            <div className="container1 mt-5">
                <NavLink to="/test" className="navlink"><h1 className="title">HTML Тест</h1></NavLink>
                <Route exact path="/test"><Start /></Route>
                {questionsArray}

                <Route exact path="/result"><Result getResult={getResult} result={result} /></Route>
                <TestCss/>
            </div>
        </BrowserRouter>

    );
};

export default Test;