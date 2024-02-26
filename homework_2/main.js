// Масиви та об'єкти:
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr1 = [{
    id: 1,
    name: 'Volodimir',
    surname: "Navrotskyi",
    lastname: 'Mykhailovych',
    sex: 'male',
    age: 17,
    hobby: 'yoga',
    password: 'nobody123',
    hometown: 'Ivano-Frankivsk',
    skills: "guitar"
}]
console.log(arr1)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let obj1 = {
    title: "God Warriors",
    pageCount: 688,
    genre: 'Historical Fantasy',
    author: [{
        name: 'Andrzej Sapkowski',
        age: 75
    }]


}
let obj2 = {
    title: 'Lod',
    pageCount: 608,
    genre: 'Historical Fantasy',
    author: [{
        name: 'Jacek Dukaj',
        age: 49
    }]

}
let obj3 = {
    title: 'Dzieje Ostrody',
    pageCount: 635,
    genre: 'History',
    author: [{
        name: 'Johannes Muller',
        age: 56
    }]
}
console.log(obj1, obj2, obj3)


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let users = [
    {name: 'petya', username: 'pro', password: '245horylla'},
    {name: 'kolya', username: 'kajlo', password: 'pokemomw'},
    {name: 'olya', username: 'olywka', password: 'astronoml'},
    {name: 'max', username: 'mad', password: 'madmax345'},
    {name: 'anya', username: 'beautiful', password: 'opmaster45'},
    {name: 'oleg', username: 'leginov', password: 'blockada12'},
    {name: 'andrey', username: 'chicken', password: '09emasna'},
    {name: 'masha', username: 'milasha', password: '342asdafo'},
    {name: 'olya', username: 'omana', password: '940momento'},
    {name: 'max', username: 'dash', password: '2374nominal'}
]

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
x !== 0
    ? console.log('Вірно')
    : console.log('Невірно')
let a = 1
let a1 = 0
let a2 = -3
console.log(a, a1, a2)
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 45
if (time > 45 && time <= 59) {
    console.log('четверту частину години')
} else if (time > 30 && time <= 45) {
    console.log('третю частину години')
} else if (time && 15 <= 30) {
    console.log('другу частину години')
} else if (time && 15 <= 0) {
    console.log('першу частину години')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 15
if (day > 0 && day <= 10) {
    console.log('1 декадa')
} else if (day > 10 && day <= 20) {
    console.log('2 декадa')
} else if (day > 20 && day <= 31) {
    console.log('3 декадa')
} else {
    console.log("Wrong day")
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day1 = 3
switch (day1) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log('Erorr')
}


//         Потрібно знайти та вивести максимальне число з тих двох .
//     - Користувач вводить або має два числа.
//         Також потрібно врахувати коли введені рівні числа.
let b = 23
let c = 12
if (b > c) {
    console.log('b: ', b)
} else if (c > b) {
    console.log('c: ', c)
} else if (b === c) {
    console.log('equal')
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x1
x1 = x1 || 'default'
x1 = x1 ?? 'default'
console.log(x1)
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super!')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super!')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super!')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super!')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super!')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super!')
}
