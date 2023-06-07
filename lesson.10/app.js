// map, filter, reduce, sort, find, slice, forEach, split, join, push
// -pop, -unshift, -shift, includes, -concat

let menu = ["Home", "About", "Profile"];
//function (alert, prompt, confirm)
//method (.map(), .filter())
//coulback function
function callBackFn(value, index, array) {
  const li = document.createElement("Li");
  li.innerText = index + 1 + "- " + value;
  document.body.appendChild(li);
  li.style.listStyle = "none";
  return li;
}
let menuLi = menu.map(callBackFn);

// -----FILTER------
let users = ["Guliza", "Zarina", "Jakyp"];
let jakyp = users.filter((value) => {
  return value === "Jakyp";
});
console.log(jakyp);

const price = [300, 400, 500, 800];
const letter = ["b", "d", "c", "a"];
const word = letter.sort();
console.log(word);

// const total = price.reduce((prev, next) => {
//     return prev + next
// }, 0)
// console.log(total  + '$');
const sortedPrice = price.sort((a, b) => b - a);

console.log(sortedPrice);

const cars = ["BMW", "Mercedes", "Mazda"];
const BMW = cars.find((el) => el === "BMW");
console.log(BMW);

const Laptops = [
  {
    name: "Asus",
    year: 2015,
    ssd: 512,
    price: 800,
  },
  {
    name: "Asus TUF",
    year: 2019,
    ssd: 512,
    price: 1200,
  },
  {
    name: "Acer",
    year: 2018,
    ssd: 1000,
    price: 1400,
  },
];
const renderLaptops = (arr,index) => {
  const ol = document.createElement("ol");
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
        <p>${arr[index].name}</p>
        <p>${arr[index].year}</p>
        <p>${arr[index].ssd} Gb</p>
        <p>${arr[index].price} $</p>
        `;
    ol.appendChild(li);
  }
  document.body.append(ol);
};
const select = document.getElementById("variant");
select.onchange = (e) => {
  switch (e.target.value) {
    case "Acer":
      const acer = Laptops.filter((el) => el.name === "Acer");
      renderLaptops(acer, 0);
      break;
    default: {
      renderLaptops(Laptops, 0);
      renderLaptops(Laptops, 1);
      renderLaptops(Laptops, 2);
    }
  }
};
