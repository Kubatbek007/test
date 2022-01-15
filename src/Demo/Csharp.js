import React from "react";
import {Container} from "react-bootstrap";
import Back from "./back";

const Csharp = () => {
    return (
        <>
            <Container>
                <Back />
                <h1>C#</h1>
                <p>C # - один из самых популярных языков программирования. Его можно использовать для множества вещей,
                    включая мобильные приложения, разработку игр и корпоративное программное обеспечение. Знание C #
                    открывает множество возможностей для разработчика.</p>
                <h5>Почему нам это нравится:</h5>
                <ul>
                    <li>Видеоигры с Unity</li>
                    <li>Веб-приложения с ASP.NET</li>
                    <li>Облачные вычисления с помощью Azure</li>
                    <li>Мобильные приложения с Xamarin</li>
                    <li>Интернет вещей с .NET Core</li>
                    <li>Машинное обучение с ML.NET</li>
                </ul>

                <h2 style={{fontWeight: 600}}>ТОП бесплатных ресурсов для тех, кто хочет изучить программирование
                    сомостоятельно (+бонусы)</h2>
                <div className="wrapper-1">
                    <a
                        href="https://www.ts.kg/show/professiya_s_razrabotchik">1. TS.kg</a>
                    <a
                        href="https://www.codecademy.com/catalog/language/html-css">2. Codecademy</a>
                </div>

                <h3>YouTube каналы:</h3>

                <div className="wrapper-1">
                    <a href="https://www.youtube.com/hashtag/simplecode">1. #SimpleCode</a>
                    <a href="https://www.youtube.com/watch?v=3FWqP80fNJM&list=PL0lO_mIqDDFU66Cwwctcv1C6VNVpaqHfo">2. Гоша Дударь</a>
                    <a href="https://www.youtube.com/watch?v=_8yZYhAkQjQ&list=PLDyJYA6aTY1laYPs6iS-SrYl9DZLVCUKr">Школа
                        itProger</a>
                </div>
            </Container>

        </>
    );
};

export default Csharp;