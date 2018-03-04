
var story = {
    "start": "You walk into a museum. Do you visit the Holy Grail, or the Mummy exibit?",
    "grail": "You find the Holy Grail exhibit, the cup comands you to drink",
    "drink": "You raise the cup to your mouth and begin drink only to notice it was blood. You spill the blood onto you body and become infected with a blood lust",
    "view": "You realize that it is just a goblet and 'you aint got no time for that'",
    "resist": "The Magic of the Holy Grail is too much for you and you are turned to dust for resiting its might",
    "bite": "You bite the neck of the first Human you see in the museum. Congrats you are now a vampire",
    "mummy": "You see that the exhibit is empty and go home dissapointed",

};


var choice = prompt( story.start );
var output = document.querySelector( "#quest" );

if( choice === "grail" ){
    choice = prompt( story[choice] );
    output.innerHTML = story[choice];
    if( choice === "drink" ){
        choice = prompt( story[choice] );
        if( choice === "bite" ){
            choice = alert( story[choice] );
            output.innerHTML = story[choice];
        }
        else if( choice === "view" ){
            choice = prompt( story[choice] );
            output.innerHTML = story[choice];
        }
    }
    else if( choice === "resist" ){
        choice = prompt( story[choice] );
        output.innerHTML = story[choice];
    }
    else{
        prompt( story[choice] );
        output.innerHTML = story[choice];
    }
}
else if( choice === "mummy" ){
    choice = alert( story[choice] );
    output.innerHTML = story[choice];
}


// console.log( "document.querySelector( '#quest' ).innerHTML = '<h1>hello world</h1>'" ) ;

// var choice = prompt( story.start );

// if( choice === "grail" ){
//    console.log( story.grail );
//    prompt(story.grail)
// }
// else if( choice === "mummy" ){
//    choice = console.log( story.mummy );
//    if(choice = drink)
// }
// else{
//    console.log( "you didnt choose" );
//    prompt( story.start );
//    console.log( document.querySelector( "#quest ).innerHTML = '<h1>hello world</h1>'";
//
// }
//
