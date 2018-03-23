/* globals $ */


var story = {
    "start over": {
        "text": "Would you like to play again?",
        "option": [ "wait", "No" ]
    },
    "wait": {
        "text": "Would you like to go to the museum?",
        "option": [ "Yes", "No" ]
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
    },
    "resist": {
        "text": "The Magic of the Holy Grail is too much for you and you are turned to dust for resiting its might",
    },
    "bite": {
        "text": "You bite the neck of the first Human you see in the museum. Congrats you are now a vampire",
    },
    "leave": {
        "text": "You drop the grail and run out of the museum, the last rays of the days sun creep around a tall building and grace your arm with its light. The skin on your arm noticably smokes then burns. Congrats you are now a vamipre "
    },
    "mummy": {
        "text": "You see that the exhibit is empty and go home dissapointed"
    }
};

// sort through object

var choice = "wait";
var storyChoice = story[choice];

var choiceOne = story[choice]["option"][0];
var choiceTwo = story[choice]["option"][1];

// Dom selections

var $choiceOne = $( "#choiceOne" );
var $choiceTwo = $( "#choiceTwo" );

var $box = [ $( ".boxOne" ), $( ".boxTwo" ) ];
var $story = $( ".story" );

var $output = $( "#output" );

// Output Section

var Output = function Output(){
    $( $output )
        .html( $story.html( "<p>" + storyChoice.text + "</p>" ) )
        .append( $box[0].html( $choiceOne.text( choiceOne ) ) )
        .append( $box[1].html( $choiceTwo.text( choiceTwo ) ) );
    $output
        .css( {
            "height": "100%",
            "width": "100%",
            "margin": "0",
            "display": "flex",
            "flex-direction": "row",
            "flex-flow": "row wrap"
        } );
    $story
        .css( {
            "height": "100%",
            "width": "100%",
            "color": "black",
            "display": "flex",
            "flex-direction": "row",
            "font-family": "serif"
        } );
    $box[0].css( {
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
    $box[1].css( {
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
};


var rightButton = $choiceOne.click( function(){
    $( this ).data( "clicked", true );
} );

var leftButton = $choiceTwo.click( function(){
    $( this ).data( "clicked", true );
} );

function wait(resolve, reject){
    return new Promise(
      function () {
      if( $choiceOne.data( "clicked" ) && choice === "wait" ){
          choice = choiceOne;
          resolve(choice);
      }
      else if( $choiceOne.data( "clicked" ) && choice === "wait" ){
          choice = choiceOne;
          reject(choice);
      };)
}

wait();
