
function add(x,y){
	return x + y;
}

function subtract(x,y){
	return x - y;
}

function multiply(x,y){
	return x * y;
}

function divide(x,y){
	return x / y;
}

function operate(operator,x,y){
	switch(operator){
		case 'multiply':
			return multiply(x,y);
			break;

		case 'add':
			return add(x,y);
			break;

		case 'subtract':
			return subtract(x,y);
			break;

		case 'divide':
			return divide(x,y);
			break;
	}
}	

const display = document.querySelector("#output");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");	
const decimalBtn = document.querySelector("#decimal");
const deleteBtn = document.querySelector("#delete");
const divideBtn = document.querySelector("#divide");

let var1, var2, operator;

//^ matches position just before first character of string
// $ matches position just after last character of string
// . matches a single character
//* matches preceding item 0 or more times
//? matches preceiding 0 or 1 time
let numCheck = /^\d*\.?\d*$/;

function clear(){
	display.textContent = null;
	var1 = null;
	var2 = null;
}

deleteBtn.addEventListener('click', function(){
	display.textContent = display.textContent.slice(0,-1);
});

clearBtn.addEventListener('click', function(){
	clear();
});

equalBtn.addEventListener('click', function(){
	var2 = parseFloat(display.textContent);
	let result = operate(operator, var1,var2).toFixed(2);
	display.textContent = result;
});

numbers.forEach((button) => {
	button.addEventListener('click', (e) => {
		if (display.textContent == '0') {
			display.textContent = button.textContent;
		} else if (numCheck.test(display.textContent)) {
			display.textContent += button.textContent;
		} else {
			display.textContent = button.textContent;
		}
	});
});

operators.forEach((button) => {
	button.addEventListener('click', (event) => {
		var1 = parseFloat(display.textContent);
		operator = event.target.id;
		display.textContent = button.textContent;
	});
});

decimalBtn.addEventListener('click', (event) => {
	if (display.textContent.indexOf('.') < 1) {
		display.textContent += '.';
	}
});