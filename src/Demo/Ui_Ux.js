import React from "react";
import diz from "../images/ui-ux1.jpg"
import {Container} from "react-bootstrap";
import Back from "./back";

const Ui_Ux = () => {
    return (
        <>
            <Container>
                <Back />
                <h1>Что такое UX/UI дизайн на самом деле?</h1>
                <p>Очень много недопонимания в среде дизайнеров и разработчиков. Также много вопросов, связанных с UX и UI у
                    новичков. UX/UI дизайн — это проектирование любых пользовательских интерфейсов в которых удобство
                    использования так же важно как и внешний вид</p>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={diz} style={{width: 700, height: 500}} alt=""/>
                </div>
                <h3>YouTube каналы:</h3>

                <div className="wrapper-1">
                    <a href="https://www.youtube.com/watch?v=_iG8E-vGB-U&list=PLHBiqMq_zR6yUDMCJosY8HZwIU3U7xN7n">
                        1. Design Lead</a>
                    <a href="https://www.youtube.com/watch?v=Alpp3Y0a--g&list=PL4D4ciWjcTFy59b1tXBAjhnNYP4fLoyVc">2. DesignLab</a>
                </div>
            </Container>
        </>
    );
};

export default Ui_Ux;