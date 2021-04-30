// OPDRACHT 1 (gebruik een clickevent en "attach" dit aan de button):


const alertButton = document.querySelector(".btn-alert"); // variable gegeven aan alle elementen met deze class-name. 

const makeAlertButtonClicked = function() { // Laat een alert zien wanneer er op alertButton geklikt wordt. 
	alert("button clicked"); 
};

alertButton.addEventListener('click', makeAlertButtonClicked);  
// dit voegt een event Listener toe aan de alertButton dat de function “makeAlertButtonClicked" uitvoert wanneer er op geklikt wordt. 


// OPDRACHT 2 
const bodyBackground = document.querySelector(".blue-background"); // variable voor achtergrond kleur van de body. 

const backgroundColorButton = document.querySelector(".btn-cb"); // variable gegeven aan alle elementen met deze class-name. 

const toggleBackgroundColor = function() {
	bodyBackground.classList.toggle("red-background"); // veranderd de achtergrondkleur wanneer er op geklikt wordt en weer terug wanneer er weer op geklikt wordt enz. 
};

backgroundColorButton.addEventListener("click", toggleBackgroundColor); // dit voegt een event Listener toe aan de backgroundColorButton dat de function “toggleBackgroundColor" uitvoert wanneer er op geklikt wordt. 


// OPDRACHT 3: changeColor vervangnen naar toggleColor. Ik had al toggle gebruikt bij opdracht 2 omdat ik het raar vond dat de knop change colour anders niet meer werkte als ik van rood naar blauw wilde. 