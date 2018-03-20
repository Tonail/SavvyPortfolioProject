/* globals $ */
var $greeting = $( "#output > h3" );
var $greet = $( "button" );
var $input = $( "input" );

var greetUser = function greetUser(){
    var firstName = $input.val();

    if( firstName ){
        $greeting.text( "Whats up! " + firstName );
    }
};


$greet
    .css( {
        "height": "100%",
        "width": "100%",
        "color": "black",
        "backgrond-color": "rgb(0, 0, 122)"
    } );

function inputCallBack( event ){
    console.log( event );
    if( event.which === 13 ){
        greetUser();
    }
}

$input.on( "keypress", inputCallBack );
$greet.on( "click", greetUser );

// greetUser();
/*
document
    .querySelector( "#header" )
    .addEventListener( "click", function doesAThing(){
        alert( "a thing" );
    } );
*/


/*
document
    .querySelector( "#header" )
    .addEventListener(
        "click",
        greetUser
    );
*/
