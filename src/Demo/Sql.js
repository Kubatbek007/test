import React from "react";
import {Container} from "react-bootstrap";
import Back from "./back";

const Sql = () => {
    return (
        <>
            <Container>
                <Back/>
                <h1>SQL</h1>
                <p>SQL - это стандартный язык управления реляционными данными. Мы живем в мире, управляемом данными, и
                    многие компании хранят информацию в больших реляционных базах данных. Это делает SQL отличным
                    навыком не только для специалистов по обработке данных и инженеров, но и для всех, кто хочет
                    разбираться в данных.</p>
                <h5>Почему нам это нравится:</h5>
                <ul>
                    <li>Легко учить</li>
                    <li>Выполняет свою работу</li>
                    <li>Быстро и эффективно</li>
                    <li>Универсальный</li>
                </ul>
                <h3>Универсальные ресурсы:</h3>
                <div className="wrapper-1">
                    <a href="https://www.codecademy.com/catalog/language/sql">1. Codecademy</a>
                </div>

                <h3>YouTube каналы:</h3>

                <div className="wrapper-1">
                    <a href="https://www.youtube.com/watch?v=lapMmGGFS7k&list=PL0lO_mIqDDFVnLvR39VpEtphQ8bPJ-xR9">
                        Гоша Дударь
                    </a>
                    <a href="https://www.youtube.com/watch?v=sLwiFGAOMK4&list=PLqj7-hRTFl_oweCD2cFQYdJDmD5bwEhb9">1. Програмания</a>
                    <a href="https://www.youtube.com/watch?v=MZrobCJlZh4&list=PLlLKga8ROEOFR_I-kODVPakS_AMLikM95">2. ГАУС</a>
                    <a href="https://www.youtube.com/watch?v=NWI7hIVN8mw&list=PL47zejIkBQvTJqvh9ZtNn01zwJ2lGXk-E">3. ROBOTOBOR.PRO
                        ✌ Доступное Программирование</a>
                </div>
            </Container>
        </>
    );
};

export default Sql;