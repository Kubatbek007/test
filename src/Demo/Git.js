import React from "react";
import {Container} from "react-bootstrap";
import Back from "./back";

const Git = () => {
    return (
        <>
            <Container>
                <Back/>
                <h1>Зачем изучать Git?</h1>
                <p>Был ли момент «Я потерял всю свою работу, и у меня есть крайний срок на следующий день»? Git - самый
                    популярный инструмент контроля версий, который разработчики используют для сохранения всех
                    соответствующих версий своей работы, чтобы избежать подобных моментов. Git также позволяет
                    разработчикам
                    легко сотрудничать и делиться своей работой с другими!</p>
                <h1>Навыки на вынос:</h1>
                <p>Проще говоря, Git - это инструмент для сохранения версий вашего кода. Этот курс научит вас базовому
                    рабочему процессу и основным функциям Git, различным способам отмены изменений или сохранению
                    нескольких
                    версий проекта, а также способам сотрудничества с другими разработчиками.</p>

                <h2 style={{fontWeight: 600}}>Git</h2>
                <div className="wrapper-1">
                    <a href="https://www.youtube.com/watch?v=JdUzxh8miQw&list=PLuY6eeDuleIOMB2R_Kky05ZfiAx2_pbAH">Git+GitHub
                        Уроки</a>
                    <a href="https://www.youtube.com/watch?v=en6gms6e54Q&list=PLIU76b8Cjem5B3sufBJ_KFTpKkMEvaTQR">Базовый
                        курс по Git</a>
                    <a href="https://www.youtube.com/watch?v=W4hoc24K93E&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb">Git:
                        курс</a>
                    <a href="https://www.ts.kg/show/git_kontrol_versii_dlya_razrabotchikov">TS.kg</a>
                </div>
            </Container>
        </>
    );
};

export default Git;