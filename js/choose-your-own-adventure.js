
var story = {
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

var choice = "start";
var storyChoice = story[choice];
var $output = $( "#output" );

var choiceOne = story[choice]["option"][0];
var choiceTwo = story[choice]["option"][1];


// Output Section
function Output(){
    $( $output )
        .html( "<div class='story'><p>" + storyChoice.text + "</p><div>" )
        .append( "<div class='box' id='choiceOne'><h1>" + choiceOne + "</h1></div>" )
        .append( "<div class='box' id='choiceTwo'><h1>" + choiceTwo + "</h1></div>" );
    $( "#output" )
        .css( {
            "height": "100%",
            "width": "100%",
            "margin": "0",
            "display": "flex",
            "flex-direction": "row",
            "flex-flow": "row wrap"
        } );
    $( ".story" )
        .css( {
            "height": "100%",
            "width": "100%",
            "color": "black",
            "display": "flex",
            "flex-direction": "row",
            "font-family": "serif"
        } );
    $( ".story > p" )
        .css( {
            "padding-top": "50px"
        } );
    $( ".box" )
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
    $( ".box > h1" )
        .css( {
            "color": "white",
            "display": "block",
            "font-size": "1em"
        } );
}

Output();


$( "#choiceOne" ).click( function(){
    choice = $( "div#choiceOne > h1" ).text();
} );

$( "#choiceTwo" ).click( function(){
    choice = $( "div#choiceTwo > h1" ).text();
} );

if( choice = story[choice]["option"][0] ){
    Output();
}
else if( choice = story[choice]["option"][1] ){
    Output();
}


/*
if( choice === "grail" ){
    prompt( story[choice]["text"] );
    if( choice === "drink" ){
        prompt( story[choice]["text"] );
        if( choice === "bite" ){
            prompt( story[choice]["text"] );
        }
        else if( choice === "leave" ){
            prompt( story[choice]["text"] );
        }
    }
    else if( choice === "view" ){
        prompt( story[choice]["text"] );
    }
}
else if( choice === "mummy" ){
    alert( story[choice]["text"] );
}
else{
    prompt( "give me a real choice" );
}
*/
