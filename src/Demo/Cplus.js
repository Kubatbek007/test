import React from "react";
import {Container} from "react-bootstrap";
import Back from "./back";


const Cplus = () => {
    return (
        <>
           <Container>
               <Back />
               <h1>C++</h1>
               <p>C ++ - очень популярный язык для приложений, критичных к производительности, которые полагаются на скорость и эффективное управление памятью. Он используется в широком спектре отраслей, включая разработку программного обеспечения и игр, виртуальную реальность, робототехнику и научные вычисления.</p>
               <h5>Почему нам это нравится:</h5>
               <ul>
                   <li>Быстро и гибко</li>
                   <li>Функциональность низкого уровня</li>
                   <li>Большое сообщество программистов</li>
                   <li>Сильная документация</li>
               </ul>
               <h2 style={{fontWeight: 600}}>ТОП бесплатных ресурсов для тех, кто хочет изучить программирование
                   сомостоятельно (+бонусы)</h2>
               <div className="wrapper-1">
                   <a
                       href="https://www.codecademy.com/catalog/language/html-css">1. Codecademy</a>
                   <a href="https://ravesli.com/uroki-cpp/">2. Уроки Ravesli</a>
               </div>

               <h3>YouTube каналы:</h3>

               <div className="wrapper-1">
                   <a href="https://www.youtube.com/hashtag/simplecode">1. #SimpleCode</a>
                   <a href="https://www.youtube.com/watch?v=qSHP98i9mDU&list=PL0lO_mIqDDFXNfqIL9PHQM7Wg_kOtDZsW">2. Гоша Дударь</a>
               </div>
           </Container>
        </>
    );
};

export default Cplus;