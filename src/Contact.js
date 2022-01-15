import React, {useState} from "react";
import Footer from "./Footer";
import {Container} from "react-bootstrap";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    })

    const InputEvent = (event) => {
        const { name, value }  = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(`${data.fullname}`)
        console.log(`${data.phone}`)
        console.log(`${data.email}`)
        console.log(`${data.msg}`)
    }

    return (
        <>
            <div className="my-2">
                <h1 className="text-center"> Contact US</h1>
            </div>
            <Container>
                <div className="row" style={{backgroundColor: 'white', marginBottom: 10}}>
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-2">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >FullName</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your name"/>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >Phone</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Mobile number"/>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com"/>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label"
                                >Message</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    rows="3"></textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;