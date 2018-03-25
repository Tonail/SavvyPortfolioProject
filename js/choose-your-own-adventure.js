/* globals $ */


var story = {
    "start over": {
        "text": "Would you like to play again?",
        "option": [ "start", "No" ]
    },
    "No": {
        "text": "Would you like to go to the museum?",
        "option": [ "start", "No" ]
    },
    "start": {
        "text": "Welcome to the Creep ville's museum of aniquities, What bring you in today? Do you visit the Holy Grail, or the Mummy exibit?",
        "option": [ "mummy", "grail" ]
    } ,
    "grail": {
        "text": "You make your way to the  the Holy Grail exhibit. While nearing the magical chalace you notice strange markings begin to apppear on the cup. As you move closer the markings become clear 'bibere a me', the grail beacons you. It suddenly fills with blood.  Do you [drink] from the cup? or, resist the urg? ",
        "option": [ "view", "drink" ]
    },
    "drink": {
        "text": "Disregarding the not touch signs, you grab the grail. you raise the grail to your mouth and begins to injest the fluid. An all ecompasing warmth fills your body then quickly disapates. You are now colder than ever. You feel very thirsty.",
        "option": [ "bite", "leave" ]
    },
    "view": {
        "text": "You realize that it is just a goblet and 'you aint got no time for that'",
        "option": [ "start", "No" ]

    },
    "resist": {
        "text": "The Magic of the Holy Grail is too much for you and you are turned to dust for resiting its might",
        "option": [ "start", "No" ]

    },
    "bite": {
        "text": "You bite the neck of the first Human you see in the museum. Congrats you are now a vampire",
        "option": [ "start", "No" ]
    },
    "leave": {
        "text": "You drop the grail and run out of the museum, the last rays of the days sun creep around a tall building and grace your arm with its light. The skin on your arm noticably smokes then burns. Congrats you are now a vamipre ",
        "option": [ "start", "No" ]
    },
    "mummy": {
        "text": "You see that the exhibit is empty and go home dissapointed",
        "option": [ "start", "No" ]

    }
};

// sort through object

var choice = "start";
var storyChoice = story[choice];

var choiceOne = story[choice]["option"][0];
var choiceTwo = story[choice]["option"][1];

// Dom selections

var $buttonOne = $( "button#buttonOne" );
var $buttonTwo = $( "#buttonTwo" );

var $boxOne = $( ".boxOne" )
    .css( {
        "width": "48%",
        "height": "50px",
        "color": "white",
        "background-color": "black",
        "display": "flex",
        "border-style": "solid",
        "border-width": "1px",
        "border-color": "rgba(255, 255, 255, 20)",
        "justify-content": "center"
    } );

var $boxTwo = $( ".boxTwo" )
    .css( {
        "width": "48%",
        "height": "50px",
        "color": "white",
        "background-color": "black",
        "display": "flex",
        "border-style": "solid",
        "border-width": "1px",
        "border-color": "rgba(255, 255, 255, 20)",
        "justify-content": "center",

    } );
var $story = $( ".story" ).css( {
    "height": "100%",
    "width": "100%",
    "color": "black",
    "font-family": "serif"
} );


var $output = $( "#output" ).css( {
    "display": "flex",
    "flex-direction": "row",
    "flex-flow": "row wrap"
} );

// Output Section
function outputChoice( ){
    var output = $( "#output" );
    var storyDiv =  $story.html( "<p>" + storyChoice.text + "</p>" );
    var boxOne = $boxOne.html( "<div class='boxOne'><button id='buttonOne'>" + choiceOne + "</button></div>" );
    var boxTwo = $boxTwo.html( "<div class='boxtwo'><button id='buttonTwo'>" + choiceTwo + "</button></div>" );

    output.prepend( storyDiv, boxOne, boxTwo );
    console.log( "Choice outputed." );
}
function click( e ){
    var commit = e.target;
    var text = commit.innerHTML;

    choice = text;
    storyChoice = story[text];
    choiceOne = story[choice]["option"][0];
    choiceTwo = story[choice]["option"][1];

    console.log( "a" );
    console.log( e );
    console.log( text );
}
function choose( e ){
    click( e );
    outputChoice();
}
outputChoice();

$( "button#buttonOne" ).on( "click", choose );

$( "button#buttonTwo" ).on( "click", choose );
