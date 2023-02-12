console.log("test");



/* 
addEventListener("click")
event.preventDefault();
.value  oder .selectedIndex

wie Leerzeichen in Zeichenketten entfernt
*/


const btn = document.querySelector("#button");
console.log(btn);
console.log(btn.value)
console.log(Array.isArray(btn)) // false
console.log(typeof btn) // object

// click
btn.addEventListener("click", farbWechsel);



// function 
function farbWechsel(event) {
    event.preventDefault();
    console.log(event)
    
// die ausgewählte Farboptionen anwendet
// in der Function vom EventListener, damit er sich die aktuellsten Werte in dem Moment zieht, wenn er gedrückt wird

console.log("in:  btnOption")

// auf die richtige Form zum einfügen für die Farbe machen
const btnOption = document.querySelector(`select`);

console.log(btnOption.value); // Medium Orchid
console.log(typeof btnOption.value) // string

let ohneLeerzeichen = (btnOption.value).replace(" ","");            // Leerzeichen raus
console.log(ohneLeerzeichen) // MediumOrchid

let klein = ohneLeerzeichen.toLowerCase();          // alles klein 
console.log(klein) // mediumorchid

const btnSelect = document.querySelector(`select`);
console.log(btnSelect.selectedIndex) // 0
    
document.querySelector(`body`).style.backgroundColor = klein;


}






