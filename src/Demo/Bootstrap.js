import React from "react";
import {Container} from "react-bootstrap";
import Back from "./back";

const Bootstrap = () => {
    return (
        <>
            <Container>
                <Back/>
                <h2>Зачем изучать Bootstrap?</h2>
                <p>Если вы хотите быстро создать веб-сайт, не создавая тонны CSS с нуля, то Bootstrap может стать тем
                    фреймворком, который вы ищете.</p>
                <h3>Навыки на вынос:</h3>
                <p>Вы узнаете о сеточной системе Bootstrap для создания сложных макетов. Затем вы создадите стиль и
                    заполните свой сайт с помощью служебных классов и компонентов Bootstrap. С Bootstrap, HTML,
                    некоторым
                    знакомством с CSS и JavaScript вы сможете создавать веб-сайты в кратчайшие сроки.</p>
                <h3>Примечание о предварительных требованиях:</h3>
                <p>Для начала изучения Bootstrap требуется базовое понимание HTML. Некоторое знакомство с тем, как
                    работает
                    CSS (селекторы CSS и визуальные правила), было бы полезно, но не обязательно.</p>

                <h3 style={{fontWeight: 600}}>Bootstrap</h3>
                <div className="wrapper-1">
                    <a href="https://getbootstrap.com/">Bootstrap</a>
                    <a href="https://react-bootstrap.github.io/">Bootstrap React</a>
                    <a href="https://www.youtube.com/watch?v=TZSY6rDUDrE&list=PL0lO_mIqDDFUQI5lrRlZfkApMWtJJ7GFE">Уроки
                        по Bootstrap для начинающих
                    </a>
                </div>
            </Container>
        </>
    );
};

export default Bootstrap;