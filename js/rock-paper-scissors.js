var output = $( "#output" );

var userChoice = prompt( "Do you choose rock, paper or scissors?" );
var computerChoice = Math.random();

var compare = function( choice1,choice2 ){
    if( choice1 === choice2 ){
        return "The result is a tie!";
    }
    if( choice1 === "rock" ){
        if( choice2 === "scissors" ){
            return "rock wins";
        }

        return "paper wins";
    }
    if( choice1 === "paper" ){
        if( choice2 === "rock" ){
            return "paper wins";
        }

        return "scissors wins";
    }
    if( choice1 === "scissors" ){
        if( choice2 === "rock" ){
            return "rock wins";
        }

        return "scissors wins";
    }
};

if( computerChoice < 0.34 ){
    computerChoice = "rock";
}
else if( computerChoice <= 0.67 ){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}


$( output ).html( "<div><h1>Player: " + userChoice + "</h1></div>" + "<div><h1> Computer: " + computerChoice + "</h1></div>" + compare( userChoice, computerChoice  ) );
