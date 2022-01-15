import React from "react";
import {Container} from "react-bootstrap";
import Back from "./back";

const JavaScript = () => {
    return (
        <>
            <Container>
                <Back/>
                <h1>JavaScript</h1>
                <p>JavaScript - это увлекательный и гибкий язык программирования. Это одна из основных технологий
                    веб-разработки, которую можно использовать как на интерфейсной, так и на внутренней стороне.</p>
                <h5>Почему нам это нравится:</h5>
                <ul>
                    <li>Универсальный и прочный</li>
                    <li>Front-End дружественный</li>
                    <li>Back-End дружественный</li>
                    <li>Включает веб-приложения</li>
                    <li>Разработка игр</li>
                    <li>Мобильные приложения</li>
                </ul>

                <h2 style={{fontWeight: 600}}>ТОП бесплатных ресурсов для тех, кто хочет изучить программирование
                    сомостоятельно (+бонусы)</h2>
                <br/>
                <h3>Универсальные ресурсы:</h3>
                <div className="wrapper-1">
                    <a href="https://www.codecademy.com/catalog/language/javascript">1. Codecademy</a>
                    <a href="https://www.ts.kg/show/polnyi_kurs_po_javascript_react_s_nulya_do_rezultata">2. TS.kg</a>
                    <a href="https://dash.generalassemb.ly/">3. Dash</a>
                    <a href="https://thecodeplayer.com/">4. The Code Player</a>
                </div>

                <h3>YouTube каналы:</h3>
                <div className="wrapper-1">
                    <a href="https://www.youtube.com/watch?v=fHl7UyRjOf0&list=PLDyJYA6aTY1kJIwbYHzGOuvSMNTfqksmk">1. Школа
                        itProger</a>
                    <a href="https://www.youtube.com/watch?v=Glux40jBsZ8&list=PLcvhF2Wqh7DPD5sRK3lw4bjBsKdgY2bPi">2. Уроки
                        JavaScript с нуля (ну ваще с нуля)</a>
                    <a href="https://www.youtube.com/watch?v=JgIG6d3JsZs&list=PL0lO_mIqDDFUGX9k45bZFuz1ixTvUhd7b">3. Гоша Дударь
                    </a>
                    <a href="https://www.youtube.com/watch?v=yJcCKuxfb2o&list=PLM6XATa8CAG7DDIBjNVd78Fv5Ueo930IV">4. Фрилансер по жизни - IT и фриланс</a>
                </div>
            </Container>
        </>
    );
};

export default JavaScript;