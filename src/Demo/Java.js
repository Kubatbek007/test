import React from "react";
import {Container} from "react-bootstrap";
import Back from "./back";

const Java = () => {
    return (
        <>
          <Container>
              <Back />
              <h1>Java</h1>
              <p>Java - один из самых популярных языков программирования. Выпущенная в 1995 году и широко используемая до
                  сих пор, Java имеет множество приложений, включая разработку программного обеспечения, мобильные
                  приложения и разработку больших систем. Знание Java открывает множество возможностей для вас как
                  разработчика.</p>
              <h5>Почему нам это нравится:</h5>
              <ul>
                  <li>Универсальность</li>
                  <li>Объектно-ориентированное программирование</li>
                  <li>Отличное место для начала</li>
                  <li>Отличная онлайн-документация</li>
              </ul>

              <h2 style={{fontWeight: 600}}>ТОП бесплатных ресурсов для тех, кто хочет изучить программирование
                  сомостоятельно (+бонусы)</h2>
              <div className="wrapper-1">
                  <a
                      href="https://www.ts.kg/show/java_dlya_nachinayushikh_s_nulya_do_sertifikata_oracle">1. TS.kg</a>
                  <a
                      href="https://www.codecademy.com/catalog/language/html-css">2. Codecademy</a>
              </div>

              <h3>YouTube каналы:</h3>

              <div className="wrapper-1">
                  <a href="https://www.youtube.com/watch?v=ziOQ8wkmnSE&list=PLAma_mKffTOSUkXp26rgdnC0PicnmnDak">1. #alishev</a>
                  <a href="https://www.youtube.com/watch?v=Zxpz5tRrUvU&list=PL0lO_mIqDDFW2xXiWSfjT7hEdOUZHVNbK">2. Гоша Дударь</a>
                  <a href="https://www.youtube.com/watch?v=U2OliQwRb6c">Школа
                      itProger</a>
              </div>
          </Container>
        </>
    );
};

export default Java;