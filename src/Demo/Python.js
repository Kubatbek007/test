import React from "react";
import {Container} from "react-bootstrap";
import Back from "./back";

const Python = () => {
    return (
        <>
            <Container>
                <Back />
                <h1>Python</h1>
                <p>Python - универсальный, универсальный и мощный язык программирования. Это отличный первый язык, потому
                    что он краток и легко читается. Python может делать все, что вы хотите. От веб-разработки до машинного
                    обучения и анализа данных - Python - это язык для вас.</p>
                <h5>Почему нам это нравится:</h5>
                <ul>
                    <li>Отличный первый язык</li>
                    <li>Большое сообщество программистов</li>
                    <li>Отличная онлайн-документация</li>
                    <li>Бесконечные библиотеки и пакеты</li>
                    <li>Всемирная популярность</li>
                    <li>Мощный и гибкий</li>
                </ul>

                <h2 style={{fontWeight: 600}}>ТОП бесплатных ресурсов для тех, кто хочет изучить программирование
                    сомостоятельно (+бонусы)</h2>
                <br/>
                <h3>Универсальные ресурсы:</h3>
                <div className="wrapper-1">
                    <a href="https://www.ts.kg/show/data_science_na_python_3_s_nulya">1. Ts.kg</a>
                </div>

                <h3>YouTube каналы:</h3>

                <div className="wrapper-1">
                    <a href="https://www.youtube.com/watch?v=n0xtO0x81cg&list=PL0lO_mIqDDFXgfuxOEDTCwsWmKezOaDTu">1. Гоша Дударь
                    </a>
                    <a href="https://www.youtube.com/watch?v=IU4-19ofajg&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6">2. egoroff_channel
                    </a>
                    <a href="https://www.youtube.com/watch?v=34Rp6KVGIEM&list=PLDyJYA6aTY1lPWXBPk0gw6gR8fEtPDGKa">3. Школа
                        itProger</a>
                </div>
            </Container>
        </>
    );
};

export default Python;