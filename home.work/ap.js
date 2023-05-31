const balance = document.getElementById('balance')
const btnPlus = document.getElementById('plus')
const inputAdd = document.getElementById('add-input')
// onclick onchange onsubmit (Dom События)
btnPlus.onclick = () => {
    const newBalance = Number(inputAdd.value) 
    balance.innerText = Number(balance.innerText) + newBalance
    inputAdd.value = ''

}

//-----------2-------------------

const btnMinus = document.getElementById('get-balance')
const inputMinus = document.getElementById('minus-inp')

btnMinus.onclick = () => {
    if (inputMinus.value > Number(balance.innerText)){
        alert('Недостаточно средств на счету' + 'Ваш баланс: ' + balance.innerText + "$")
        inputMinus.value = ''
    }else{
    const minusBalance = Number(inputMinus.value)
    balance.innerText = Number(balance.innerText) - minusBalance
    inputMinus.value = ''
    }
}
//--------3----------

const date = new Date()
const user1 = {
    name: 'Zhakyp',
    lastName: 'Zhumagulov',
    status: 'VIP',
    date: `0${date.getMonth()}.${date.getDate()}.${date.getFullYear()}`
}
// DOM user element
const userName = document.getElementById('user-name')
const userDate = document.getElementById('user-date')
const userStatus = document.getElementById('user-status')
const userLastName = document.getElementById('user-lastName')

function renderUser(user){
    userName.innerText = user.name
    userDate.innerText = user.date
    userStatus.innerText = user.status
    userLastName.innerText = user.lastName
}
renderUser(user1)

//----------4-----------------
const btnLogOut = document.getElementById('logOut')
const divUserInfo = document.getElementById('user-info')
btnLogOut.onclick = () => {
    divUserInfo.style.display = 'none'
}
