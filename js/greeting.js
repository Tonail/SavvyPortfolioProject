var greetUser = function greetUser(){
    var firstName = prompt( "What is your Name" );

    if( !firstName ){
        greetUser();
    }
    else{
        console.log( document.querySelector( "#content div:first-child > h3" ).textContent = "Whats up! " + firstName );
    }
};

greetUser();
