import React from "react";
import web from "../src/images/home.png";
import {NavLink} from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Совершенствуйте свои знания с помощью <strong className="brand-name"><br/>ТМИТ Тест</strong>
                                    </h1>
                                    <h2 className="my-2">
                                        С помощью нашего тестирования вы улучшите свои знания в области информационных технологий.
                                    </h2>
                                    <div className="my-3">
                                        <NavLink to="/service" className="button" >
                                            <span className="button__line button__line--top"></span>
                                            <span className="button__line button__line--right"></span>
                                            <span className="button__line button__line--bottom"></span>
                                            <span className="button__line button__line--left"></span>
                                            Начать</NavLink>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <div  className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img style={{width: '70%'}} src={web} className="img-fluid animated mb-2" alt="home img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;