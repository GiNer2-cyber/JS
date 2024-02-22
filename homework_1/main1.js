let a1, b2, c3, d, e, f, g, o, h, n, p, t, q;
a1 = 'hello';
b2 = 'owu';
c3 = 'com';
d = 'ua';
e = 1;
f = 10;
g = -999;
o = 123;
h = 3.14;
n = 2.7;
p = 16;
t = true;
q = false;
console.log(a1, b2, c3, d, e, f, g, o, h, n, p, t, q)
let middleName = 'Navrotskyi ';
let firstName = ' Volodimir ';
let lastName = 'Mykhailovych';
const person = middleName + firstName + lastName
console.log(person)
let a = 100
console.log(typeof a)
let b = '100'
console.log(typeof b)
let c = true
console.log(typeof c)


let firstName1 = prompt('Your firstName?', 'firstName');
let middleName1 = prompt('Your middleName?', 'middleName');
let lastName1 = prompt('Your lastName?','lastName');
let age = parseInt(prompt('Your age?', 'age'));

const result = `${middleName1} ${firstName1}  ${lastName1} ${age} `;
console.log(result);