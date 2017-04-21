// GRABBING INPUTS FROM THE DOM
var createButton = document.getElementById("main-button");
var mainTarget = document.getElementById("dom-target");
var musings = document.getElementById("user-musings");
// ADDING EVENT LISTENER AND METHOD TO CREATE BUTTON
createButton.addEventListener("click", makeCard);
// CREATING CARDS W/ USER INPUT AND POPULATING DOM
function makeCard() {
    var card = `<div class="cards">${musings.value}<br><br><button type="button" class="deleteMe">Delete</button></div>`;
    mainTarget.innerHTML += card;
    cardAction();
    clearInput();
}
// Grab BUTTON CLASSES AND ADD LISTENERS TO ALL
function cardAction() {
    var buttons = document.getElementsByClassName('deleteMe');
    for(var i = 0; i < buttons.length; i++) {
        console.log(buttons[i]);
        buttons[i].addEventListener("click", function() {
         this.parentNode.remove();
        });
    }
}
// CLEARING INPUT
function clearInput() {
    console.log("musings:", musings.value)
    musings.value = "";
}
