import React from "react";
import {NavLink} from "react-router-dom";
import {Card} from "react-bootstrap";



const Service = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto cardd">
                <Card style={{width: '22rem'}} className="dashboard-card">
                    <Card.Img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
                    <Card.Body className="card-body card-detail">
                        <Card.Title style={{fontWeight: 'bold'}}>{props.title}</Card.Title>
                        <Card.Text className="card-text">
                            {props.p}
                        </Card.Text>
                        <NavLink to={props.bottom}
                            className="btn btn-primary d-flex justify-content-center align-items-center">Начинать
                            обучение</NavLink>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
        ;
};

export default Service;