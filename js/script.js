'use strict';
(function () {
	//Variables declaration
	var newGameBtn = document.getElementById("new-game-btn");
	var rockBtn = document.getElementById("rock");
	var paperBtn = document.getElementById("paper");
	var scissorsBtn = document.getElementById("scissors");
	var pointsH2 = document.getElementById("points");
	var computerMovevar = '';
	var winScore = 0;
	var compScore = 0
	var playerScore = 0;
	var textcompScore =document.getElementById("computer-points");
	var textplayerScore = document.getElementById("player-points");
	var output = document.getElementById("move-output");
	var outputInfo = document.getElementById("move-output-container");
	var resultContainer = document.getElementById("result-container");
	var compPick = '';
	var resultMove = '';

	var moveObj = {
		pm: "",	
	    win: "",
	    lose : "",
	    compareMoves: function (cM) {
	    	if (cM == this.win) {
	    		console.log("you win");
	    		document.getElementsByClassName("text-container")[0].innerHTML += "Player gets a point" + "<br>";
	    		playerScore ++;
	    		textplayerScore.innerText = playerScore;
	    		resultMove = 'You get a point';
	    	} else if (cM == this.lose) {
	    		console.log("you lose");
	    		document.getElementsByClassName("text-container")[0].innerHTML += "Point for Computer" + "<br>";
	    		compScore ++;
	    		textcompScore.innerText = compScore;
	    		resultMove = 'Computer gets a point';
	    	} else {
	    		console.log("draw");
	    		document.getElementsByClassName("text-container")[0].innerHTML += "DRAW" + "<br>";
	    		resultMove = 'DRAW';
	    	}
	    }
	};

	//Events
	newGameBtn.addEventListener("click", newGame);
	rockBtn.addEventListener("click", function(){
		playerMove("r");
	}); 
	paperBtn.addEventListener("click", function(){
		playerMove("p");
	}); 
	scissorsBtn.addEventListener("click", function(){
		playerMove("s");
	}); 

	//Functions

	function newGame(){
		winScore =  window.prompt('Please enter amount of points needed to win');
		if(isNaN(winScore) || winScore == null || winScore === ''){   
			console.log("incorrect value" + ' ' + winScore);
	    } else{
	    	outputInfo.classList.remove("warning");
	    	outputInfo.classList.remove("success");
	    	output.innerText = "Pick your move";
	    	pointsH2.innerText = winScore;
	    	textplayerScore.innerText = 0;
			textcompScore.innerText = 0;
			compScore = 0;
			playerScore = 0;
			resultContainer.innerText = '';
	    } 
	}
	function computerMove() {
		var randomFigure = Math.floor(Math.random() * (3 - 1 + 1)) + 1;	
		var cMoveDisplay = document.getElementById("computer-move-text");
		var compIcons = document.getElementsByClassName("comp-pick");
		for (var i = 0; i < compIcons.length; i++) {
			compIcons[i].classList.add('hide-comp-move');
		}
		if (randomFigure === 1){
			computerMovevar = 'r';
			console.log("Computer: Rock");
			cMoveDisplay.innerText = "Computer plays: Rock";
			document.getElementsByClassName("text-container")[0].innerHTML += "Computer: Rock vs ";
			compPick = 'Rock';
			document.getElementById("compRock").classList.remove("hide-comp-move");
		} else if (randomFigure === 2) {
			computerMovevar = 'p';
			console.log("Computer: Paper");
			document.getElementsByClassName("text-container")[0].innerHTML += "Computer: Paper vs ";
			cMoveDisplay.innerText = "Computer plays: Paper";
			compPick = 'Paper';
			document.getElementById("comPaper").classList.remove("hide-comp-move");
		} else if (randomFigure === 3) {
			computerMovevar = 's';
			console.log("Computer: Scissors");
			document.getElementsByClassName("text-container")[0].innerHTML += "Computer: Scissors vs ";
			cMoveDisplay.innerText = "Computer plays: Scissors";
			compPick = 'Scissors';
			document.getElementById("compScissors").classList.remove("hide-comp-move");
		} else {
			console.log("error");
		}
	}

	function playerMove (move) {
		if (isNaN(winScore) || winScore === 0 || winScore == null || winScore === ''){
			console.log("Please click New Game button to set up winning score");
			document.getElementsByClassName("text-container")[0].innerHTML += "Please click New Game button to set up winning score" + "<br>";
			return;
		} else {
			computerMove();		
			if (move == "r"){
				console.log("Player: Rock");
				document.getElementsByClassName("text-container")[0].innerHTML += "Player: Rock" + "<br>";
				moveObj['pm'] = 'r';	
				moveObj['win'] = 's';	
				moveObj['lose'] = 'p';	
				moveObj.compareMoves(computerMovevar);
				output.innerText = "Rock vs " + compPick;
				document.getElementById("result-container").innerText = resultMove;
			} else if (move == "p") {
				console.log("Player: Paper");
				moveObj['pm'] = 'p';	
				moveObj['win'] = 'r';	
				moveObj['lose'] = 's';
				moveObj.compareMoves(computerMovevar);	
				output.innerText = "Paper vs " + compPick;
				document.getElementById("result-container").innerText = resultMove;
			} else if (move == "s") {
				console.log("Player: Scissors");
				moveObj['pm'] = 's';	
				moveObj['win'] = 'p';	
				moveObj['lose'] = 'r';
				moveObj.compareMoves(computerMovevar);	
				output.innerText = "Paper vs " + compPick;
				document.getElementById("result-container").innerText = resultMove;
			} else {
				console.log("error");
			}
		}	
		checkWin(winScore, playerScore, compScore);		
	}

	function checkWin (winScore, playerScore, computerScore) {
		if(winScore == playerScore || winScore < playerScore) {
			console.log("Player Wins the game");
			reset();
			document.getElementById("move-output-container").classList.add("success");
			output.innerText = "You Win";
			resultContainer.innerText = '';
			var cMoveDisplay = document.getElementById("computer-move-text").innerText = "";
		} else if (winScore == computerScore || winScore < computerScore) {
			console.log("Computer Wins the game");
			reset();
			document.getElementById("move-output-container").classList.add("warning");
			output.innerText = "You Lose, try again?"
			resultContainer.innerText = '';
			var cMoveDisplay = document.getElementById("computer-move-text").innerText = "";
		} else {
			console.log("Keep playing");
		}
	}

	function reset() {
		winScore = 0;
		var compIcons = document.getElementsByClassName("comp-pick");
		for (var i = 0; i < compIcons.length; i++) {
			compIcons[i].classList.add('hide-comp-move');
		}
	}
 })();