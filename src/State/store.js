const store = {
    questions : [
        {
            qNumber: '1. ',
            question:  ' О чем говорит тэг <p align="right"> … </p>?',
            var1: 'Текст, заключенный в тэг, будет расположен по центру страницы',
            var2: ' Текст, заключенный в тэг, будет расположен по левому краю страницы',
            var3: ' Текст, заключенный в тэг, будет расположен по правому краю страницы',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            path: "/1",
            link: "/2",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '2. ',
            question:  ' Какие единицы измерения могут использоваться для атрибута ширины?',
            var1: ' Пиксели и %',
            var2: ' Миллиметры и сантиметры',
            var3: ' Пиксели и миллиметры',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: "/2",
            link: "/3",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '3. ',
            question:  ' Использование тэга … позволяет добавлять одну строку текста без начала нового абзаца.',
            var1: ' <line/>',
            var2: ' <br/>',
            var3: ' <td/>',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            path: "/3",
            link: "/4",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '4. ',
            question:  ' Что содержит в себе атрибут href?',
            var1: ' URL страницы, на которую произойдет перенаправление',
            var2: ' Имя страницы, на которую произойдет перенаправление',
            var3: ' Указание на то, где будет открываться новая страница: в том же или новом окне',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: "/4",
            link: "/5",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '5. ',
            question:  ' Укажите тэг, который соответствует элементу списка:',
            var1: ' <li>',
            var2: ' <ul>',
            var3: ' <ol>',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: "/5",
            link: "/6",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '6. ',
            question:  ' О чем говорит следующая запись: <form action="url" method="POST">?',
            var1: ' Создается форма, при заполнении которой вводимые данные будут отображаться',
            var2: ' Создается форма, при заполнении которой вводимые данные не будут отображаться',
            var3: ' Создается форма, которая будет служить для внесения информации, представленной в виде ссылки (URL)',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            path: "/6",
            link: "/7",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '7. ',
            question:  ' Какие тэги делают шрифт текста жирным?',
            var1: ' <ins> и <del>',
            var2: ' <li> и <ul>',
            var3: ' <b> и <strong>',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            path: "/7",
            link: "/8",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '8. ',
            question:  ' Какие тэги используются для определения заголовков?',
            var1: ' h1-h6',
            var2: ' Header',
            var3: ' Heading',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: "/8",
            link: "/9",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '9. ',
            question:  ' Неотображаемые комментарии в HTML задаются следующим образом:',
            var1: ' <! - Your comment -!>',
            var2: ' <! - - Your comment - -!>',
            var3: ' <!p> Your comment </!p>',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            path: "/9",
            link: "/10",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '10. ',
            question:  ' HTML – это',
            var1: ' Язык разметки',
            var2: ' Библиотека гипертекста',
            var3: ' Скриптовый язык',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: "/10",
            link: "/result",
            next: 'КОНЕЦ'
        }
    ]
}

export default store;