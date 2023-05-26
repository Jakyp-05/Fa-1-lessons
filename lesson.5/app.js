// Functions-Функция
// let-озгортуу const-озгорбойт (var-эски)

// const number = "+996 500 255 225"
// let Kanat = checkNumber(number, '+996 500 255 225')

// const number2 = "+996 222 222 555"
// let kanat2 = checkNumber(number2, '+996 222 222 555')



// console.log(Kanat);
// console.log(kanat2);

// function checkNumber (num, phone){
//     if(num === phone){
//         return true
//     }
// }

// DOM
// DOM Document Object Modal
//-----OLD----
// Find Element (h1-h6, p, div, section)
// getElementByID() #id
// get ElementsByTagName() div button img ul
// get ElementsByClassName() text-center-class

//----NEW----
// querySelector() div.text-center
// querySelectorAll() div button img

// const h1Tag = document.querySelectorAll('h1')// []
// console.log(h1Tag);
// for(let i = 0; i< h1Tag.length; i++){
//     if(i < 2){
//         h1Tag[i].style.background = 'blue'
//     }else if( i < 4){
//         h1Tag[i].style.background = 'red'
//     }
// h1Tag[i].innerText = h1Tag[i].innerText + " World"
// h1Tag[i].style.color = 'yellow'
// h1Tag[i].style.fontSize = '56px'
// // h1Tag[i].style.background = 'green'
// h1Tag[i].style.textAlign = 'center'
// }

const cars = [{
    model: "Audi",
    price: 2220,
    color: 'black',
    img: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-performance-automobile/i7-m70-xdrive/bmw-i7-m70-stage-teaser.png.asset.1681387862051.png"
},
{
    model: "BMW",
    price: 4220,
    color: 'blue',
    img: "https://avatars.mds.yandex.net/get-verba/216201/2a0000017f6e15f4368df3112afb695baac4/cattouchret"
}
]

const div = document.querySelector('#list')

for (const car of cars) {
    div.innerHTML +=`
    
    <div class='card'>
        <div>
            <img src=${car.img} width="200" />
        </div>
        <div>
            <h1>${car.model}</h1>
            <p>${car.price} $ </p>
            <p>${car.color}</p>
        </div>
    </div>`
}