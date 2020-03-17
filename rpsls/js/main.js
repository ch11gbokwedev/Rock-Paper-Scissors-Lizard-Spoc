var botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;

function playerThrowsRock(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"Rock");
}

function playerThrowsPaper(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"Paper");
}

function playerThrowsScissors(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"Scissors");
}

function getRandomWeapon(){
	var randomNumber=Math.random();
	// The Math function gives you a value from 1-0.
	// The random method yields a random number within the range of the Math function value (0-1)
	var botsWeapon="Rock";
	if(randomNumber<.33){
		botsWeapon="Scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="Paper";
	}
	botDisplay(botsWeapon);
	return botsWeapon;
}

// These functions determine who will win or lose the game.

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("It's a draw");
	}
	else if(
		(botsWeapon=="Scissors" && playersWeapon=="Paper") ||
		(botsWeapon=="Paper" && playersWeapon=="Rock") ||
		(botsWeapon=="Rock" && playersWeapon=="Scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
	player(playersWeapon);
}
function increaseBotScore(){
	botScore++;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser.");
}
function increasePlayerScore(){
	playerScore++;
	document.getElementById("playerScore").innerHTML=playerScore;
	displayCompleteMessage("Woohoo! You won!");
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
function botDisplay(botmsg){
	document.getElementById("botSelection").innerHTML=botmsg;
}
function player(usermsg){
	document.getElementById("userSelection").innerHTML=usermsg;
}
