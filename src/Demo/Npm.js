import React from "react";
import nod from "../images/node.png";
import {Container} from "react-bootstrap";
import Back from "./back";

const Npm = () => {
    return (
        <>
            <Container>
                <Back />
                <h1>Что Такое npm?</h1>
                <p>npm – это менеджер пакетов, который входит в состав Node.js. В течение многих лет Node широко
                    использовался разработчиками JavaScript для обмена инструментами, установки различных модулей и
                    управления их зависимостями. Вот почему людям, работающим с Node.js, очень важно понять, что такое
                    npm.</p>
                <h1>Как Работает npm?</h1>
                <p>Он работает, выполняя одну из своих двух ролей:</p>
                <ul>
                    <li>Это широко используемый репозиторий для публикации проектов Node.js с открытым исходным кодом. Это
                        означает, что это онлайн-платформа, где каждый может публиковать и делиться инструментами,
                        написанными на JavaScript.
                    </li>
                    <li>npm – это инструмент командной строки, который помогает взаимодействовать с онлайн-платформами,
                        такими как браузеры и серверы. Эта утилита помогает в установке и удалении пакетов, управлении
                        версиями и зависимостями, необходимыми для запуска проекта.
                    </li>
                </ul>

                <h2 style={{fontWeight: 600}}>Npm пакеты</h2>
                <div className="wrapper-1">
                    <a href="https://www.npmjs.com/">Гланая страница</a>
                    <a href="https://www.hostinger.ru/rukovodstva/chto-takoe-npm">Что Такое npm? Общее Руководство для Начинающих</a>
                </div>
                    
                <h3>YouTube каналы:</h3>
                <div className="wrapper-1">
                    <a href="https://www.youtube.com/watch?v=sL6VvWOAuLE">ЧТО ТАКОЕ Node Package Manager(NPM) за 12 минут?</a>
                </div>

            </Container>
        </>
    );
};

export default Npm;