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


	var moveObj = {
		pm: "",	
	    win: "",
	    lose : "",
	    compareMoves: function (cM) {
	    	if (cM == this.win) {
	    		console.log("you win");
	    	}else if (cM == this.lose) {
	    		console.log("you lose");
	    	}else {
	    		console.log("draw");
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
	    	pointsH2.innerText = winScore;
	    } 
	}
	function computerMove() {
		var randomFigure = Math.floor(Math.random() * (3 - 1 + 1)) + 1;	
		if (randomFigure === 1){
			computerMovevar = 'r';
			console.log("Computer: Rock");
		} else if (randomFigure === 2) {
			computerMovevar = 'p';
			console.log("Computer: Paper");
		} else if (randomFigure === 3) {
			computerMovevar = 's';
			console.log("Computer: Scissors");
		} else {
			console.log("error");
		}
	}

	function playerMove (move) {
		computerMove();		
		if (move == "r"){
			console.log("Player: Rock");
			moveObj['pm'] = 'r';	
			moveObj['win'] = 's';	
			moveObj['lose'] = 'p';	
			moveObj.compareMoves(computerMovevar);
		} else if (move == "p") {
			console.log("Player: Paper");
			moveObj['pm'] = 'p';	
			moveObj['win'] = 'k';	
			moveObj['lose'] = 's';
			moveObj.compareMoves(computerMovevar);	
		} else if (move == "s") {
			console.log("Player: Scissors");
			moveObj['pm'] = 's';	
			moveObj['win'] = 'p';	
			moveObj['lose'] = 'k';
			moveObj.compareMoves(computerMovevar);	
		} else {
			console.log("error");
		}
		
	}

	function checkMove (points) {
		if (isNaN(points) || points === 0 || points == null || points === ''){
			console.log("Please click New Game button to set up winning score");
			return;
		} else {
			console.log("l");
		}
	}
 })();




  /* 

  TODO
 - funkcja losujaca przy wybraniu ruchu
 - porownywanie wynikow - obiekt?
 - zmiana wyniku
 - porownywanie czy juz jest osiagniety limit
 - wyswietlanei koncowe
  var a = {
  'k': 'n',
  'n': 'p',
  'p': 'k'
}

if (a[playerPick] == randomFigure)
*/