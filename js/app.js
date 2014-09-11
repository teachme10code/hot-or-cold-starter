
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
});

//When the '+ New Game' link is clicked, the page is reloaded
function newGame() {
	location.reload();
}

//Generate a random number between 1 and 100
function generateRandomNumber() {
	var randomNumber = Math.floor(Math.random() * 100) + 1;
	console.log(randomNumber);
	return randomNumber;
}

//Evaluate the user's guess and return feedback
function evaluateGuess() {
	var userInputValue = $('#userGuess').val();
	console.log(userInputValue);
}


