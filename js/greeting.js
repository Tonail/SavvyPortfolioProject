var greetUser = function greetUser(){
    var firstName = prompt( "What is your name" );

    if( !firstName ){
        greetUser();
    }
    else{
        alert( "Hello " + firstName );
    }
};

greetUser();
