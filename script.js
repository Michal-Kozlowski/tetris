var sizeX = 11;
var sizeY = 26;
var gameIsOn = false;
var positionX = 5;
var	positionY = 2;
var blockType;
var activeBlock;
var interval = 333;
var points = 0;

var table = document.querySelector("table");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var span = document.querySelector("span");

// create world
function createWorld(){
	for (var i = 0; i <= sizeY; i++) {
		var row = table.insertRow();
		if(i < 5){
			table.rows[i].classList.add("hidden");
		} else if(i === 5) {
			table.rows[i].classList.add("background-black");			
		}
		for (var j = 0; j <= sizeX; j++) {
			row.insertCell();
		}
	}
}
createWorld();

// input
document.addEventListener("keydown", function(e){
	if(e.keyCode === 37 || e.keyCode === 65) {
		e.preventDefault();
		left();
	}
	else if(e.keyCode === 38 || e.keyCode === 87 || e.keyCode === 32) {
		e.preventDefault();
		rotate();
	}	
	else if(e.keyCode === 39 || e.keyCode === 68) {
		e.preventDefault();
		right();
	}	
	else if(e.keyCode === 40 || e.keyCode === 83) {
		e.preventDefault();
		down();
		down();
		down();
	}
	if(e.keyCode === 32 && !gameIsOn) {
		init();
		gameIsOn = true;
	}
});

function square(){
	table.rows[positionY].cells[positionX].classList.add("active");
	table.rows[positionY].cells[positionX+1].classList.add("active");
	table.rows[positionY+1].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX+1].classList.add("active");
}

function L(){
	table.rows[positionY].cells[positionX].classList.add("active");
	table.rows[positionY-1].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX+1].classList.add("active");
}

function mirrorL(){
	table.rows[positionY].cells[positionX].classList.add("active");
	table.rows[positionY-1].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX-1].classList.add("active");
}

function S(){
	table.rows[positionY].cells[positionX+1].classList.add("active");
	table.rows[positionY].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX-1].classList.add("active");
}

function Z(){
	table.rows[positionY].cells[positionX-1].classList.add("active");
	table.rows[positionY].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX+1].classList.add("active");
}

function triangle(){
	table.rows[positionY].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX-1].classList.add("active");
	table.rows[positionY+1].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX+1].classList.add("active");
}

function I(){
	table.rows[positionY-1].cells[positionX].classList.add("active");
	table.rows[positionY].cells[positionX].classList.add("active");
	table.rows[positionY+1].cells[positionX].classList.add("active");
	table.rows[positionY+2].cells[positionX].classList.add("active");
}

function spawnBlock(){	
	blockType = Math.floor(Math.random() * 7);
	if(blockType === 0){
		activeBlock = square();
	} else if(blockType === 1){
		activeBlock = L();
	} else if(blockType === 2){
		activeBlock = mirrorL();
	} else if(blockType === 3){
		activeBlock = S();
	} else if(blockType === 4){
		activeBlock = Z();
	} else if(blockType === 5){
		activeBlock = triangle();
	} else if(blockType === 6){
		activeBlock = I();
	}
	for (var i = 0; i < Math.floor(Math.random() * 4); i++) {
		rotate();
	}
}

function rotate(){
	if(blockType !== 0 && positionX >= 2 && positionX < sizeX-1){
		if(table.rows[positionY-2].cells[positionX].classList.contains("active")){
			table.rows[positionY].cells[positionX+2].classList.add("rotated");
		}
		if(table.rows[positionY-1].cells[positionX-1].classList.contains("active")){
			table.rows[positionY-1].cells[positionX+1].classList.add("rotated");
		}
		if(table.rows[positionY-1].cells[positionX].classList.contains("active")){
			table.rows[positionY].cells[positionX+1].classList.add("rotated");
		}
		if(table.rows[positionY-1].cells[positionX+1].classList.contains("active")){
			table.rows[positionY+1].cells[positionX+1].classList.add("rotated");
		}
		if(table.rows[positionY].cells[positionX-2].classList.contains("active")){
			table.rows[positionY-2].cells[positionX].classList.add("rotated");
		}
		if(table.rows[positionY].cells[positionX-1].classList.contains("active")){
			table.rows[positionY-1].cells[positionX].classList.add("rotated");
		}
		if(table.rows[positionY].cells[positionX].classList.contains("active")){
			table.rows[positionY].cells[positionX].classList.add("rotated");
		}
		if(table.rows[positionY].cells[positionX+1].classList.contains("active")){
			table.rows[positionY+1].cells[positionX].classList.add("rotated");
		}
		if(table.rows[positionY].cells[positionX+2].classList.contains("active")){
			table.rows[positionY+2].cells[positionX].classList.add("rotated");
		}
		if(table.rows[positionY+1].cells[positionX-1].classList.contains("active")){
			table.rows[positionY-1].cells[positionX-1].classList.add("rotated");
		}
		if(table.rows[positionY+1].cells[positionX].classList.contains("active")){
			table.rows[positionY].cells[positionX-1].classList.add("rotated");
		}
		if(table.rows[positionY+1].cells[positionX+1].classList.contains("active")){
			table.rows[positionY+1].cells[positionX-1].classList.add("rotated");
		}
		if(table.rows[positionY+2].cells[positionX].classList.contains("active")){
			table.rows[positionY].cells[positionX-2].classList.add("rotated");
		}
		for (var i = 0; i < sizeX; i++) {	
			for (var j = 0; j < sizeY; j++) {	
				table.rows[j].cells[i].classList.remove("active");
				if(table.rows[j].cells[i].classList.contains("rotated")){			
					table.rows[j].cells[i].classList.add("active");
					table.rows[j].cells[i].classList.remove("rotated");
				}
			}
		}
	}
}

// move
function tempToActive(){
	for (var i = 0; i < sizeX; i++) {	
		for (var j = 0; j < sizeY; j++) {
			if(table.rows[j].cells[i].classList.contains("temp")){			
				table.rows[j].cells[i].classList.add("active");
				table.rows[j].cells[i].classList.remove("temp");
			}
		}
	}
}

function down(){
	var check = 0;
	for (var i = 0; i < sizeX; i++) {
		for (var j = sizeY-1; j >= 3; j--) {
			if(table.rows[j].cells[i].classList.contains("active")){
				if(	(table.rows[j+1].cells[i].classList.contains("active")
					&& table.rows[j-1].cells[i].classList.contains("active")
					&& table.rows[j-2].cells[i].classList.contains("active")
					&& table.rows[j-3].cells[i].classList.contains("active"))
					|| (j === sizeY-1)
					|| table.rows[j+1].cells[i].classList.contains("stay")
				){
					check++;
						for (var i = 0; i < sizeX-1; i++) {
							if(table.rows[6].cells[i].classList.contains("active")){
							gameOver();
						}
					}
				}
			}
		}
	}
	for (var i = 0; i < sizeX; i++) {
		if(check === 0){
			for (var j = sizeY-2; j >= 0; j--) {
				if(table.rows[j].cells[i].classList.contains("active") ){
					table.rows[j+1].cells[i].classList.add("temp");
					table.rows[j].cells[i].classList.remove("active");				
				}
			}
		}
	}
	positionY++;
	tempToActive();
	if(check > 0){
		activeToStay();
		spawnBlock();
	}
}

function left(){
	var check = 0;
	for (var i = 0; i < sizeX; i++) {
		for (var j = sizeY-1; j >= 0; j--) {
			if(table.rows[j].cells[i].classList.contains("active")){
				if((   table.rows[j].cells[i+1].classList.contains("active")
					&& table.rows[j].cells[i+2].classList.contains("active")
					&& table.rows[j].cells[i+3].classList.contains("active")
					&& table.rows[j].cells[i+4].classList.contains("active")
					) 
					|| (i === 1)
					|| table.rows[j].cells[i-1].classList.contains("stay")
					){
					check++;
				}
			}
		}
	}
	for (var i = 0; i < sizeX; i++) {
		if(check === 0){
			for (var j = sizeY-1; j >= 0; j--) {
				if(table.rows[j].cells[i].classList.contains("active") ){
					table.rows[j].cells[i-1].classList.add("temp");
					table.rows[j].cells[i].classList.remove("active");				
				}
			}
		}
	}
	tempToActive();
	positionX--;
}

function right(){
	var check = 0;
	for (var i = 0; i < sizeX; i++) {
		for (var j = sizeY-1; j >= 0; j--) {
			if(table.rows[j].cells[i].classList.contains("active")){
				if((   table.rows[j].cells[i-1].classList.contains("active")
					&& table.rows[j].cells[i-2].classList.contains("active")
					&& table.rows[j].cells[i-3].classList.contains("active")
					&& table.rows[j].cells[i-4].classList.contains("active")
					) 
					|| (i === sizeX-1)
					|| table.rows[j].cells[i+1].classList.contains("stay")
					){
					check++;
				}
			}
		}
	}
	for (var i = 0; i < sizeX; i++) {
		if(check === 0){
			for (var j = sizeY-1; j >= 0; j--) {
				if(table.rows[j].cells[i].classList.contains("active") ){
					table.rows[j].cells[i+1].classList.add("temp");
					table.rows[j].cells[i].classList.remove("active");				
				}
			}
		}
	}
	tempToActive();
	positionX++;
}

function activeToStay(){
	for (var i = 0; i < sizeX; i++) {	
		for (var j = 0; j < sizeY; j++) {
			if(table.rows[j].cells[i].classList.contains("active")){			
				table.rows[j].cells[i].classList.add("stay");
				table.rows[j].cells[i].classList.remove("active");
			}
		}
	}
	destroy();
	positionX = 5;
	positionY = 2;
}

function init(){
	for (var i = 0; i < sizeX; i++) {	
		for (var j = 0; j < sizeY; j++) {				
			table.rows[j].cells[i].classList.remove("active");
			table.rows[j].cells[i].classList.remove("stay");
		}
	}
	h1.classList.add("hide");
	h2.classList.remove("hidden");
	points = 0;	
	span.textContent = points;
	spawnBlock();
	game = setInterval(down, interval);
}

function gameOver(){	
	clearInterval(game);
	gameIsOn = false;
	h1.classList.remove("hide");
	h1.textContent = "press space to play again";
}

function destroy(){
	for (var j = 0; j < sizeY; j++) {
		var checkRow = 0;
		for (var i = 1; i < sizeX; i++) {
			if(table.rows[j].cells[i].classList.contains("stay")){			
				checkRow++;
			}
		}
		if(checkRow === 10){
			for (var i = 1; i < sizeX; i++) {
				table.rows[j].cells[i].classList.remove("stay");
			}
			for (var k = j; k >= 5; k--) {
				for (var i = 1; i < sizeX; i++) {
					if(table.rows[k].cells[i].classList.contains("stay") ){
						table.rows[k+1].cells[i].classList.add("stay");
						table.rows[k].cells[i].classList.remove("stay");				
					}
				}
			}
			points++;
			span.textContent = points;
		}
	}
}
