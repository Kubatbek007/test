import React, {useState}from "react";
import Question from "./Test2/question";
import {Result} from "./Test2/result";
import "../src/Test2/app.css";
import store from "./State/storeCss";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import StartCss from "./Test2/start";


const TestCss = () => {

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
                <NavLink to="/testcss" className="navlink"><h1 className="title">Css Тест</h1></NavLink>
                <Route exact path="/testcss"><StartCss/></Route>
                {questionsArray}
                <Route exact path="/result"><Result getResult={getResult} result={result} /></Route>
            </div>
        </BrowserRouter>

    );
};

export default TestCss;