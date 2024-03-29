// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b
}

console.log(square(10, 3))
console.log(square(20, 4))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sCircle(r) {
    return Math.PI * r * r

}

console.log(sCircle(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCylinder(r, h) {
    return (2 * Math.PI * r * r) + (2 * Math.PI * r * h)

}

console.log(sCylinder(5, 15))
console.log(sCylinder(5, 30))

// - створити функцію яка приймає масив та виводить кожен його елемент
function logger(arr) {
    for (let item of arr) {
        console.log('item : ', item)
    }
}

logger([100500, false, 'hello okten'])
logger([100, true])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function pCreator(text) {
    document.write(`<p>${text}</p>`)
}

pCreator('yuppie')
pCreator('yeah')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator1(text) {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

ulCreator1('Prescription')
ulCreator1('Medicine')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreator2(text, count) {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

ulCreator2('yay', 2)
ulCreator2('play', 2)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function ulCreator3(arr) {
    document.write(`<ul>`)
    for (let item of arr) {
        document.write(`<li>${item}</li>`)

    }
    document.write(`<ul>`)
}

ulCreator3([18, true, false, 'reach'])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

function userList(arr) {
    for (const user of arr) {
        document.write(`
        <div>
            <hr>
            <p>Id: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Age: ${user.age}</p>
            <hr>
        `)
    }
}

userList(users)

// - створити функцію яка повертає найменьше число з масиву
function minNumber(arrOfNums) {
    let min = arrOfNums[0]
    for (let i = 1; i < arrOfNums.length; i++) {
        if (arrOfNums[i] < min) {
            min = arrOfNums[i]
        }
    }
    return min
}

console.log('minNumber : ', minNumber([23, 129, 1000, 100500]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arrOfNums) {
    let result = 0
    for (let i = 0; i < arrOfNums.length; i++) {
        result += arrOfNums[i]
    }
    return result
}

console.log('sum : ', sum([89, -9 , 20]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

function swap(arr, index1, index2) {
    const numIndex1 = arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=numIndex1

    return  arr
}

console.log(swap([25, 45, 35, 20], 2, 3))
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sum, currencies, resultCurrency) {
    for (let cur of currencies) {
        if (cur.currency === resultCurrency) {
            return `${sum / cur.value} ${resultCurrency}`
        }
    }
    return 'Wrong currency!'
}

const currencies = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'W', value: 2},
    {currency: 'DE', value: 6},
    {currency: 'SS', value: 25},
    {currency: 'RE', value: 13},
    {currency: 'PL', value: 8},
]
const result = exchange(10000, currencies, 'DD')
console.log('result : ', result)


// function exchange(sum, currencies, resultCurrency) {
//     let result = 0;
//     for (const cur of currencies) {
//         if (cur.currency === resultCurrency) {
//             result = sum / cur.value
//             break;
//         }
//     }
//     return result;
// }