//custom javascript 

//back-end 

var loop = function(userInput, userInput2, userInput3) {
	var resultOfArray = [];
	for(var i = 1; i <= userInput; i++) {
		if(((i % userInput2) === 0) && ((i % userInput3) === 0)) {
				resultOfArray.push("FizzBuzz!");
		} else if((i % userInput2) === 0) {
				resultOfArray.push("Fizz!");
		} else if((i % userInput3) === 0) {
				resultOfArray.push("Buzz!");
		} else {
				resultOfArray.push(i);
		}
	}
	return resultOfArray;
};

//front-end 

$(document).ready(function() {
	$("#submit-btn").click(function(event) {
		event.preventDefault();
		var userInput = parseInt($("#number-input").val());
		var userInput2 = parseInt($("#number-input2").val());
		var userInput3 = parseInt($("#number-input3").val());
		var resultOfArray = loop(userInput, userInput2, userInput3);
		$("#pingpong-result").text(resultOfArray);
		$("#initial-display").slideToggle();
		$("#pingpong-result").slideToggle();
		$("#result").slideToggle();
	})
	$("#reset-btn").click(function() {
		location.reload();
	});
});