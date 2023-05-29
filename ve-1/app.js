// Dom


const form = document.getElementById("form")

const userData = {
    name: "User",
    email: "test@gmail.com",
    nikName: "venom_",
    password: "23456",
}

form.onsubmit = (e) => { 
    e.preventDefault()
    const formData = e.target
    const formEmail = formData.email.value
    const formPassword = formData.password.value

    if(userData.email === formEmail && userData.password === formPassword) {
        alert("Welcome " +userData.name)
        window.location.href = "https://www.google.com/"
    }else {
        alert('Error email or password')
    }
}

//DOM ELEMENTY

const btnMinus = document.getElementById('minus')
const btnPlus = document.getElementById('plus')
const pText = document.getElementById('text-count')
const price = document.getElementById('price')

// onclick
btnPlus.onclick = () => {
    pText.innerText = parseInt(pText.innerText) + 1
    // pText.innerText = +pText.innerText + 1
    // pText.innerText = Number(pText.innerText) + 1
    price.innerText = 500 *  parseInt(pText.innerText)   + "$"
}
btnMinus.onclick = () => {
    if(parseInt(pText.innerText) > 0){
        pText.innerText = parseInt(pText.innerText) - 1
    }
    const allTotal = parseInt(price.innerText)
    price.innerText = allTotal - 500 + "$"
}

