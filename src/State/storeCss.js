const storeCss = {
    questions : [
        {
            qNumber: '1. ',
            question:  ' Какое свойство используется для задания полей у блока?',
            var1: 'margin',
            var2: ' position',
            var3: ' padding',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            path: "/1",
            link: "/2",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '2. ',
            question:  ' Какой вариант задания цвета НЕ сработает?',
            var1: ' color: #aaa;',
            var2: ' color: #aaaaaa;',
            var3: ' color: #hhh;',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            path: "/2",
            link: "/3",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '3. ',
            question:  ' Какое свойство используется для задания отступов у блока?',
            var1: ' direction',
            var2: ' margin',
            var3: ' direction',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            path: "/3",
            link: "/4",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '4. ',
            question:  ' Виктору надо, чтобы при наведении курсора мыши на ссылку, она меняла цвет. Какой псевдоэлемент нужно использовать Виктору?',
            var1: ' hover',
            var2: ' onmouseover',
            var3: ' active',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: "/4",
            link: "/5",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '5. ',
            question:  ' Какой CSS-код написан правильно?',
            var1: ' div {border: 1px solid #ccc;}',
            var2: ' <div> {border: 1px solid #ccc;}',
            var3: ' div {border: 1px solid #hhh;}',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: "/5",
            link: "/6",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '6. ',
            question:  ' Как правильно вставляются комментарии в CSS-код?',
            var1: ' # Мой комментарий #',
            var2: ' /* Мой комментарий */',
            var3: ' // Мой комментарий',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            path: "/6",
            link: "/7",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '7. ',
            question:  ' В какой части HTML документа следует подключать таблицы стилей?',
            var1: ' В секции <body>',
            var2: ' В начале документа',
            var3: ' В секции <head>',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            path: "/7",
            link: "/8",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '8. ',
            question:  ' Как правильно подключать таблицу стилей?',
            var1: ' <link rel=”stylesheet” type=”text/css” href=”mystyle.css”>',
            var2: ' <style src=”mystyle.css”>',
            var3: ' <stylesheet>mystyle.css</stylesheet>',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: "/8",
            link: "/9",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '9. ',
            question:  ' Какой HTML атрибут используется для создания встроенных стилей?',
            var1: ' font',
            var2: ' style',
            var3: ' styles',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            path: "/9",
            link: "/10",
            next: "СЛЕДУЮЩИЙ"
        },
        {
            qNumber: '10. ',
            question:  ' Какой HTML тэг используется для создания локальных стилей?',
            var1: ' <style>',
            var2: ' <script>',
            var3: ' <css>',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: "/10",
            link: "/result",
            next: 'КОНЕЦ'
        }
    ]
}

export default storeCss;