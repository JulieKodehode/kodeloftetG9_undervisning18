/*

// Array Methods

const fruitBowl = ["Orange", "Banana", "Apple", "Kiwi", "Peach"];
console.log(fruitBowl);
console.log(fruitBowl.toString());

// .push() legger til et element på slutten i en array
fruitBowl.push("Mango");
console.log(fruitBowl);

// .unshift() legger til et element på starten i en array
fruitBowl.unshift("Pineapple");
console.log(fruitBowl);

// .pop() fjerner elementet på slutten i en array

fruitBowl.pop();
fruitBowl.pop();
console.log(fruitBowl);

// .shift() fjerner elementet på starten i en array
fruitBowl.shift();
console.log(fruitBowl);

*/

/*
// Her kommer utfyllt kode!
function createFruitBowl(action) {
    const inputFruit = document.querySelector("#inputFruit").value;
    console.log(inputFruit);

    const fruitBowl = [];

    if (action === "fruitPush") {
        fruitBowl.push(inputFruit);
        console.log(fruitBowl);
    } else {
        console.log("Something went wrong!")
    }
}
*/

const fruitPush = document.querySelector("#fruitPush");
const fruitPop = document.querySelector("#fruitPop");
const fruitUnshift = document.querySelector("#fruitUnshift");
const fruitShift = document.querySelector("#fruitShift");

const fruitBowl = [];

fruitPush.addEventListener("click", function () {
    let inputFruit = document.querySelector("#inputFruit");
    fruitBowl.push(inputFruit.value);

    let fruitDisplay = document.querySelector("#fruitDisplay");
    fruitDisplay.textContent = fruitBowl;

    inputFruit.value = "";
});

fruitPop.addEventListener("click", function () {
    let inputFruit = document.querySelector("#inputFruit");
    fruitBowl.pop(inputFruit.value);

    let fruitDisplay = document.querySelector("#fruitDisplay");
    fruitDisplay.textContent = fruitBowl;

    inputFruit.value = "";
});

fruitUnshift.addEventListener("click", function () {
    let inputFruit = document.querySelector("#inputFruit");
    fruitBowl.unshift(inputFruit.value);

    let fruitDisplay = document.querySelector("#fruitDisplay");
    fruitDisplay.textContent = fruitBowl;

    inputFruit.value = "";
});

fruitShift.addEventListener("click", function () {
    let inputFruit = document.querySelector("#inputFruit");
    fruitBowl.shift(inputFruit.value);

    let fruitDisplay = document.querySelector("#fruitDisplay");
    fruitDisplay.textContent = fruitBowl;

    inputFruit.value = "";
});