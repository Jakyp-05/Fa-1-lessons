// Functions - функция

// let userName = 'Kutman'

// hello('Nazima', 'Kutman', 'Jakyp')




// function hello(name, name2, name3) {
//     // hoisting
//     alert(' Hello ' + name);
//     alert(' Hello ' + name2);
//     alert(' Hello ' + name3);
// }

// -------return-------
// let user = {
//     name: 'Kutman',
//     phone: '+996500123456',
//     email: 'test@gmail.com',
//     address: {
//         city: 'Bisnkek',
//         street: 'Kutman street'
//     }
// }
// function getSomeKey(key, obj) {
//     return{
//         [key]: obj[key],
//     }
// }
// const name = getSomeKey('name', user)
// const phone = getSomeKey('phone', user)
// console.log('phone', phone);
// console.log("name:", name);
// declaration()
// // -----------виды функции------------
// // fuunction declaration v1
// function declaration(params) {
//     console.log("I'm declaration function");
// }

// //function expression v2
// const expressionFn = function name(params) {
//     console.log("I'm expession function");
// }
// expressionFn()

// // arrow function () => {}
// const arrowFn = () => {
//     console.log("I'm arrow function");
// }

// ------calculator-------
const Calculator = {
    sum: (a, b) => a + b,
    min: (num1, num2) => num1 - num2,
    multiply: (p1, p2) => p1 * p2,
    divide: (a, b) => a / b,
    pow: (a, b) => a ** b
}
const res = Calculator.pow(50, 10) 
console.log('res: ', res);

// callbackFunction
const array = ['item', 'item2', 'itrm3']

const array2 = ['item4',]

function getArray(arr1, arr2) {
    if (arr1.length > arr2.length){
        return arr1
    }else if (arr2.length > arr1.length){
        return arr2
    }else{
        return "Они равны"
    }
}

const newArr = getArray(array1, array2)
console.log("newArr: ", newArr);

function someName (){
    const randomNum = ~~(Math.random () * 100)
    console.log(randomNum);
}
someName()