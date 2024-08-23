/* <- Ta bort for å se gjennomgangen av Array Methods

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

/* <- Ta bort for å se orignale koden med if/else statement

// createFruitBowl(action)-funksjon: Avhengig av action-parameteren, endrer den fruitBowl-arrayen ved å legge til et nytt frukt til slutten (fruitPush), fjerne den siste frukten (fruitPop), fjerne den første frukten (fruitShift), eller legge en frukt til begynnelsen (fruitUnshift). Den oppdaterer deretter et visningselement med innholdet i fruitBowl og tømmer inndatafeltet.
// Event Lyttere: Fire knapper på nettsiden utløser createFruitBowl-funksjonen med forskjellige handlinger (fruitPush, fruitPop, fruitShift, fruitUnshift), slik at brukere interaktivt kan endre fruitBowl-arrayen.

const fruitBowl = [];

function createFruitBowl(action) {
    const inputFruit = document.querySelector("#inputFruit").value;  
    console.log(inputFruit);

    if (action === "fruitPush") {
        fruitBowl.push(inputFruit);  
        console.log(fruitBowl);
    } else if (action === "fruitPop") {
        fruitBowl.pop();  
        console.log(fruitBowl);
    } else if (action === "fruitShift") {
        fruitBowl.shift(); 
        console.log(fruitBowl);
    } else if (action === "fruitUnshift") {
        fruitBowl.unshift(inputFruit);  
        console.log(fruitBowl);
    } else {
        console.log("Something went wrong!");
    }

    let fruitDisplay = document.querySelector("#fruitDisplay");
    fruitDisplay.textContent = fruitBowl;

    document.querySelector("#inputFruit").value = ""; 
}

document.querySelector("#fruitPush").addEventListener("click", function() {
    createFruitBowl("fruitPush");
});

document.querySelector("#fruitPop").addEventListener("click", function() {
    createFruitBowl("fruitPop");
});

document.querySelector("#fruitShift").addEventListener("click", function() {
    createFruitBowl("fruitShift");
});

document.querySelector("#fruitUnshift").addEventListener("click", function() {
    createFruitBowl("fruitUnshift");
})
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
