/* globals $ */


var story = {
    "No": {
        "text": "Thanks for playing?",
        "option": [ "start", "No" ]
    },

    "Play Again": {
        "text": "Would you like to play again?",
        "option": [ "start", "No" ]
    },
    "wait": {
        "text": "Would you like to go to the museum?",
        "option": [ "start", "No" ]
    },
    "start": {
        "text": "Welcome to the Creeps ville's museum of antiquities, what bring you in today? Would you like to visit the Holy Grail, or the Mummy exhibit?",
        "option": [ "mummy", "grail" ]
    } ,
    "grail": {
        "text": "You make your way to the the Holy Grail exhibit. All seems normal. While nearing the magical chalice you notice strange markings begin to appear on the side of the goblet. As you move closer to see, the markings become clear 'bibere a me'. The grail beacons you. It suddenly fills with blood. Do you drink from the Holy-Grail? Or, resist the urge?",
        "option": [ "ignore", "drink" ]
    },
    "drink": {
        "text": "Disregarding the no touch signs, you reach for the grail. After getting your shakey mortal hands on the goblet,  you raise it to your mouth and slowly begin to ingest the fluid. An all encompassing warmth fills your body with an powerful and unexpected pleasure, then quickly dissipates. You are now colder than ever. You feel very thirsty. Very thirsty...",
        "option": [ "bite", "leave" ]
    },
    "ignore": {
        "text": "You treat it as just another cup. You 'Ain't got no time for that'.",
        "option": [ "Play Again", "No" ]

    },
    "resist": {
        "text": "The Magic of the Holy Grail is too much for you and you are turned to dust for resiting its might",
        "option": [ "Play Again", "No" ]

    },
    "bite": {
        "text": "After searching for and finding a water fountain to quench this new painful thirst. You hear a faint beating sound coming from behind you while you bend over to drink. The beat  gets louder.  The water seems to not be hitting the spot. You turn around to notice the sound coming from the neck of the man behind you in line... You pounce on the him and begin to drink his blood. Congrats you are now a vampire",
        "option": [ "Play Again", "No" ]
    },
    "leave": {
        "text": "You drop the grail and run out of the museum, the last rays of the days sun creep around a tall building and grace your arm with its light. The skin on your arm noticeably smokes then burns. Congrats you are now a vampire.",
        "option": [ "Play Again", "No" ]
    },
    "mummy": {
        "text": "“Mummy more like Dummy”. You see that the exhibit is empty and go home disappointed.",
        "option": [ "Play Again", "No" ]

    }
};

// sort through options

var choice = "wait"; // sets starting screen
var storyChoice = story[choice];

var choiceOne = story[choice]["option"][0];
var choiceTwo = story[choice]["option"][1];

// Dom selections


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
    var buttonOne = $( ".buttonOne" ) ;
    var buttonTwo = $( ".buttonTwo" );

    $boxOne.html( "<div class='boxOne'><button id='buttonOne'>" + choiceOne + "</button></div>" );
    $boxTwo.html( "<div class='boxtwo'><button id='buttonTwo'>" + choiceTwo + "</button></div>" );


    // buttons
    $( "button#buttonOne" ).on( "click", choose );
    $( "button#buttonTwo" ).on( "click", choose );

    output.prepend( storyDiv );
    console.log( "Choice outputed." );
}

function click( e ){
    var commit = e.target;
    var text = commit.innerHTML;

    choice = text;
    storyChoice = story[text];
    choiceOne = story[choice]["option"][0];
    choiceTwo = story[choice]["option"][1];

    console.log( "a" ); // console log for click feedback
    console.log( e ); // console log click event object for inspection
    console.log( text ); // console log click event dom node inner text
}

// click and output
function choose( e ){ // passes event callback to click function
    click( e ); // click and set output
    outputChoice();// output
}

outputChoice();
