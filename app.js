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
	return x % y;
}

function operate(operator,x,y){
	switch(operator){
		case 'multiply':
			console.log(multiply(x,y));
			break;

		case 'add':
			console.log(add(x,y));
			break;

		case 'subtract':
			console.log(subtract(x,y));
			break;

		case 'divide':
			console.log(divide(x,y));
			break;
	}
}	

$('.button').on('click', function(event){
	//get id of event target
	let eventID = event.target.id;

	//determine what number/operator it is
	alert(eventID);
	//add to display

});