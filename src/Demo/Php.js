import React from "react";
import {Container} from "react-bootstrap";

const Php = () => {
    return (
        <>
            <Container>
                <h1>Php</h1>
                <p>PHP - это язык сценариев общего назначения, широко используемый в качестве серверного языка для
                    создания
                    динамических веб-страниц. Хотя его репутация неоднозначна, PHP по-прежнему чрезвычайно популярен и
                    используется более чем на 75% всех веб-сайтов, на которых известен серверный язык
                    программирования.</p>
                <h5>Почему нам это нравится:</h5>
                <ul>
                    <li>Масштабируемость и гибкость</li>
                    <li>Отличное сообщество</li>
                    <li>Открытый исходный код</li>
                    <li>Быстро и динамично</li>
                    <li>Используется везде</li>
                </ul>

                <h2 style={{fontWeight: 600}}>ТОП бесплатных ресурсов для тех, кто хочет изучить программирование
                    сомостоятельно (+бонусы)</h2>
                <br/>
                <h3>Универсальные ресурсы:</h3>
                <div className="wrapper-1">
                    <a href="https://www.codecademy.com/catalog/language/php">1. Codecademy</a>
                </div>

                <h3>YouTube каналы:</h3>

                <div className="wrapper-1">
                    <a href="https://www.youtube.com/watch?v=tjUxxvkjVf8&list=PLoAR5Y5WzhsLdudnlGPI7nJ-F4JZemq4x">1. PHP Zone
                    </a>
                    <a href="https://www.youtube.com/watch?v=4jbkHDZQCqY&list=PLypd1VrGv7FMBt_CCURNZQtkuR_InqjFP">2. Magisters
                        | Обучение современным профессиям
                    </a>
                    <a href="https://www.youtube.com/watch?v=GfHSbgyHN_I">3. Школа
                        itProger</a>
                </div>
            </Container>
        </>
    );
};

export default Php;