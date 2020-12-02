//      CLASS TASK 1 ---- см. файл templates 2

// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

//         //      CLASS TASK 2

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// const arrayH2 = document.getElementsByTagName('h2');
// console.log(arrayH2);
// const content = document.getElementById('content');
// const ul = document.createElement('ul');

// for (const h2 of arrayH2) {
//     const li = document.createElement('li');
//     ul.appendChild(li);
//     li.innerText = h2.innerText;
// }

// content.appendChild(ul);
// // -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
				// 	body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				// },
				// {
				// 	title: 'Третье правило Бойцовского клуба.',
				// 	body: 'В схватке участвуют только двое.'
				// },
				// {
				// 	title: 'Четвертое правило Бойцовского клуба.',
				// 	body: 'Не более одного поединка за один раз.'
				// },
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];

// const wrap = document.createElement('div');
// wrap.id = 'wrap';

// for (let i = 0; i < rules.length; i++) {
//     const rule = rules[i];
//     const divRule = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     divRule.className = `rules rule${i+1}`
//     h2.innerText = rule.title;
//     p.innerText = rule.body;
//     divRule.appendChild(h2);
//     divRule.appendChild(p);

//     wrap.appendChild(divRule);
// }

// document.body.appendChild(wrap);

// *** за допомогою fetch (як в прикладі) отримати від
//  jsonplaceholder всі users. За допомогою document.createElement
//   вивести їх в браузер. Помістити кожен окремий об'єкт в блок,
//    при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

// let users = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        // users = response;
        console.log(users);
        users.forEach(({id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}}, phone, website, company: {name: nameCompany, catchPhrase, bs}}) => {
            const user = {id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}}, phone, website, company: {name: nameCompany, catchPhrase, bs}};
            const userDiv = document.createElement('div');
            console.log(user);
            for (const key in user) {
                const elementDiv = document.createElement('div');
                const element = user[key];
                console.log(element);
                elementDiv.innerText = `${element}`
                userDiv.appendChild(elementDiv);
                for (const key in element) {
                    if (key === 'street' || key === 'suite' || key === 'city' || key === 'zipcode' || key === 'geo' || key === 'name' || key === 'catchPhrase' || key === 'bs') {
                        const elementaryDiv = document.createElement('div');
                        const elementary = element[key];
                        elementaryDiv.innerText = `---${elementary}`;
                        elementDiv.appendChild(elementaryDiv);
                        for (const key in elementary) {
                            if (key === 'lat' || key === 'lng') {
                                const elementariestDiv = document.createElement('div');
                                const elementariest = elementary[key];
                                elementariestDiv.innerText = `***${elementariest}`;
                                elementaryDiv.append(elementariestDiv);
                            }
                        }
                    }
                }
            }
            // -----супер много кода - всё ручками
            // const property0 = document.createElement('h3');
            // const property1 = document.createElement('div');
            // const property2 = document.createElement('div');
            // const property3 = document.createElement('div');

            // const property4 = document.createElement('div');
            // const pre1Property4 = document.createElement('div');
            // const pre2Property4 = document.createElement('div');
            // const pre3Property4 = document.createElement('div');
            // const pre4Property4 = document.createElement('div');
            // const pre5Property4 = document.createElement('div');
            // const inner1Pre5Property4 = document.createElement('div');
            // const inner2Pre5Property4 = document.createElement('div');

            // const property5 = document.createElement('div');
            // const property6 = document.createElement('div');

            // const property7 = document.createElement('div');
            // const pre1Property7 = document.createElement('div');
            // const pre2Property7 = document.createElement('div');
            // const pre3Property7 = document.createElement('div');

            // property0.innerText = `USER: ${id}`
            // property1.innerText = `${name};`;
            // property2.innerText = `${username};`;
            // property3.innerText = `${email};`;

            // property4.innerText = `address:`;
            // pre1Property4.innerText = `--- ${street},`;
            // pre2Property4.innerText = `--- ${suite},`;
            // pre3Property4.innerText = `--- ${city},`;
            // pre4Property4.innerText = `--- ${zipcode},`;
            // pre5Property4.innerText = `--- geo:`;
            // inner1Pre5Property4.innerText = `___${lat};`;
            // inner2Pre5Property4.innerText = `___${lng};`;

            // property5.innerText = `${phone};`;
            // property6.innerText = `${website};`;
            
            // property7.innerText = `company:`;
            // pre1Property7.innerText = `--- ${nameCompany};`;
            // pre2Property7.innerText = `--- ${catchPhrase};`
            // pre3Property7.innerText = `--- ${bs};`;

            // user.appendChild(property0);
            // user.appendChild(property1);
            // user.appendChild(property2);
            // user.appendChild(property3);

            // user.appendChild(property4);
            // property4.appendChild(pre1Property4);
            // property4.appendChild(pre2Property4);
            // property4.appendChild(pre3Property4);
            // property4.appendChild(pre4Property4);
            // property4.appendChild(pre5Property4);
            // pre5Property4.appendChild(inner1Pre5Property4);
            // pre5Property4.appendChild(inner2Pre5Property4);

            // user.appendChild(property5);
            // user.appendChild(property6);

            // user.appendChild(property7);
            // property7.appendChild(pre1Property7);
            // property7.appendChild(pre2Property7);
            // property7.appendChild(pre3Property7);
            //  -------------------------------------------
            const br = document.createElement('br');
            userDiv.appendChild(br);

            document.body.appendChild(userDiv);
        }); 
    })    

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту



fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(response => {
        return response.json();
    })
    .then(courses => {
        console.log(courses);
        for (let i = 0; i < courses.length; i++) {
            const course = courses[i];
            console.log(course);
            const courseDiv = document.createElement('div');
            for (const key in course) {
                const elementDiv = document.createElement('div');
                const element = course[key];
                console.log(element);
                elementDiv.innerText = `${element}`;
                courseDiv.appendChild(elementDiv);  
                
            }
            const hr = document.createElement('hr');
            courseDiv.appendChild(hr); 
            document.body.appendChild(courseDiv);
        }
    })