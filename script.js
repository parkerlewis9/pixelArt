
// Function to create a box and append it to body
function createBox() {
	var box = document.createElement("DIV");
	box.style.backgroundColor = "white";
	box.style.width = "5%";
	box.style.float = "left";
	box.style.paddingBottom = "5%";
	box.style.border = "2px solid black";
	box.setAttribute("class", "divs")
	document.body.appendChild(box);
};

// Make the grid
for(var i = 0; i < 154; i++) {
	createBox();
};

// Set up listener on all divs
var divs = document.getElementsByClassName("divs");
for(var j = 0; j < divs.length; j++) {
	divs[j].addEventListener("click", function() {
		this.style.backgroundColor = color;

	});
};

//Global variable for color
var color =  "white"

//Black Pallet Swatch
var black = document.createElement("DIV");
black.style.backgroundColor = "black";
black.style.width = "5%";
black.style.float = "left";
black.style.paddingBottom = "5%";
black.style.border = "2px solid black";
document.body.appendChild(black)

black.addEventListener("click", function() {
	color = "black"
})
//White Pallet Swatch
var white = document.createElement("DIV");
white.style.backgroundColor = "white";
white.style.width = "5%";
white.style.float = "left";
white.style.paddingBottom = "5%";
white.style.border = "2px solid white";
document.body.appendChild(white)

white.addEventListener("click", function() {
	color = "white"
})
//Grey Pallet Swatch
var grey = document.createElement("DIV");
grey.style.backgroundColor = "grey";
grey.style.width = "5%";
grey.style.float = "left";
grey.style.paddingBottom = "5%";
grey.style.border = "2px solid grey";
document.body.appendChild(grey)

grey.addEventListener("click", function() {
	color = "grey"
})
//Blue Pallet Swatch
var blue = document.createElement("DIV");
blue.style.backgroundColor = "blue";
blue.style.width = "5%";
blue.style.float = "left";
blue.style.paddingBottom = "5%";
blue.style.border = "2px solid black";
document.body.appendChild(blue)

blue.addEventListener("click", function() {
	color = "blue"
})

//Green Pallet Swatch
var green = document.createElement("DIV");
green.style.backgroundColor = "green";
green.style.width = "5%";
green.style.float = "left";
green.style.paddingBottom = "5%";
green.style.border = "2px solid green";
document.body.appendChild(green)

green.addEventListener("click", function() {
	color = "green"
})
//Purple Pallet Swatch
var purple = document.createElement("DIV");
purple.style.backgroundColor = "purple";
purple.style.width = "5%";
purple.style.float = "left";
purple.style.paddingBottom = "5%";
purple.style.border = "2px solid purple";
document.body.appendChild(purple)

purple.addEventListener("click", function() {
	color = "purple"
})
//Red Pallet Swatch
var red = document.createElement("DIV");
red.style.backgroundColor = "red";
red.style.width = "5%";
red.style.float = "left";
red.style.paddingBottom = "5%";
red.style.border = "2px solid red";
document.body.appendChild(red)

red.addEventListener("click", function() {
	color = "red"
})
//Yellow Pallet Swatch
var yellow = document.createElement("DIV");
yellow.style.backgroundColor = "yellow";
yellow.style.width = "5%";
yellow.style.float = "left";
yellow.style.paddingBottom = "5%";
yellow.style.border = "2px solid yellow";
document.body.appendChild(yellow)

yellow.addEventListener("click", function() {
	color = "yellow"
})








