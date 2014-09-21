
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
	return randomNumber;
}

var guessCount = 0;
var guessedNumbers = [];
var randomNumber = generateRandomNumber();
console.log(randomNumber);

//Evaluate the user's guess and return feedback
//Add check for number already guessed
//Add hot or cold hints
function evaluateGuess() {
	var inputValue = parseInt($('#userGuess').val());
	if (inputValue > 0 && inputValue <= 100 && inputValue % 1 === 0 && !isNaN(inputValue) && inputValue !== null) {
		var difference = Math.abs(inputValue - randomNumber);
		console.log(difference);
		if (difference === 0) {
			guessedNumbers.push(' ' + inputValue);
		    $('ul#guessList').text('Your guesses: ' + guessedNumbers);
			guessCount += 1;
			$('span#count').text(guessCount);
			$('h2#feedback').text("YOU GOT IT RIGHT!!!");
		}
		if (difference >= 50) {
			$('h2#feedback').text("You're ice-cold!");
			guessedNumbers.push(' ' + inputValue);
			$('#userGuess').val('');
			$('ul#guessList').text('Your guesses: ' + guessedNumbers);
			guessCount += 1;
			$('span#count').text(guessCount);
		}
		if (difference < 50 && difference >= 30) {
			$('h2#feedback').text("You're cold");
			guessedNumbers.push(' ' + inputValue);
			$('#userGuess').val('');
			$('ul#guessList').text('Your guesses: ' + guessedNumbers);
			guessCount += 1;
			$('span#count').text(guessCount);
		}
		if (difference < 30 && difference >= 20) {
			$('h2#feedback').text("You're warm");
			guessedNumbers.push(' ' + inputValue);
			$('#userGuess').val('');
			$('ul#guessList').text('Your guesses: ' + guessedNumbers);
			guessCount += 1;
			$('span#count').text(guessCount);
		}
		if (difference < 20 && difference >= 10) {
			$('h2#feedback').text("You're hot!");
			guessedNumbers.push(' ' + inputValue);
			$('#userGuess').val('');
			$('ul#guessList').text('Your guesses: ' + guessedNumbers);
			guessCount += 1;
			$('span#count').text(guessCount);
		}
		if (difference < 10 && difference >= 1) {
			$('h2#feedback').text("You're VERY hot!");
			guessedNumbers.push(' ' + inputValue);
			$('#userGuess').val('');
			$('ul#guessList').text('Your guesses: ' + guessedNumbers);
			guessCount += 1;
			$('span#count').text(guessCount);
		}
	} else {
			alert('Enter a whole number between 1 and 100');
			$('#userGuess').val('');
	}
}

