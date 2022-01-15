import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Test from "./Test";
import Contact from "./Contact";
import Service from "./Service";
import Bootstrap from "./Demo/Bootstrap";
import Java from "./Demo/Java";
import Csharp from "./Demo/Csharp";
import Cplus from "./Demo/Cplus";
import JavaScript from "./Demo/JavaScript";
import Git from "./Demo/Git";
import Npm from "./Demo/Npm";
import Sql from "./Demo/Sql";
import HtCs from "./Demo/htcs"
import Python from "./Demo/Python";
import Php from "./Demo/Php"
import Ui_Ux from "./Demo/Ui_Ux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import TestCss from "./TestCss";


function App() {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/git" component={Git}/>
                <Route exact path="/npm" component={Npm}/>
                <Route exact path="/sql" component={Sql}/>
                <Route exact path="/php" component={Php}/>
                <Route exact path="/diz" component={Ui_Ux}/>
                <Route exact path="/java" component={Java}/>
                <Route exact path="/test" component={Test}/>
                <Route exact path="/testcss" component={TestCss}/>
                <Route exact path="/cplus" component={Cplus}/>
                <Route exact path="/python" component={Python}/>
                <Route exact path="/csharp" component={Csharp}/>
                <Route exact path="/htcs" component={HtCs}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/service" component={Service}/>
                <Route exact path="/bootstrap" component={Bootstrap}/>
                <Route exact path="/javascript" component={JavaScript}/>
                <Redirect exact to="/" />
            </Switch>
        </>
    );
}

export default App;
