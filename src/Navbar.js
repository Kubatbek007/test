import React, {useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../src/images/pngwing.com (1).png"
import 'bootstrap/dist/css/bootstrap.min.css';



function _Navbar() {

    return (
        <>
            <Navbar className="navbar navbar-light"  expand="lg">
                <Container className="container-fluid">
                    <NavLink to="/" ><img src={logo} className="logo"/></NavLink>
                    <NavLink
                        className="navbar-brand"
                        to="/"
                        title="Тест по математике и информационным технологиям"
                    >ТМИТ</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse
                        className="collapse navbar-collapse coll"
                        id="navbarSupportedContent">
                        <Nav
                            className="navbar-nav mx-auto ml-auto  navbar-brand">
                            <NavLink
                                activeClassName="menu_active"
                                exact
                                className="nav-link active" aria-current="page" to="/"
                            >Дом</NavLink>
                            <NavLink
                                activeClassName="menu_active"
                                className="nav-link" to="/service"
                            >Услуги</NavLink>
                            <NavLink
                                activeClassName="menu_active"
                                className="nav-link" to="/test"
                            >Тест</NavLink>
                            <NavLink
                                activeClassName="menu_active"
                                className="nav-link" to="/contact"
                            >Контакт</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default _Navbar;
