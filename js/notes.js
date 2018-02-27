
// Notes


// /declare the variables
var trueVar = 2 === 2;
var falseVar = 2 === 4;
var string = "string";
var int = 2;
var undefinedVar;


// declare the function
var logPrimitives = function logPrimitives(){
    console.log( trueVar );
    console.log( falseVar );
    console.log( string );
    console.log( int );
    console.log( undefinedVar );
};


// run function by calling it
logPrimitives();


// run the function using if statment


if( !3 ){
    logPrimitives();
}


// complex data types
// array = a set of ordered items primitives or complex datatypes ordered by index starting at 0 defined by []
// object = a set ofitems primitives or complex datatypes associated by strings defined by  {} seperated by (,)


// object
var user = {
    "name": "Tony",
    "city": "St. Louis",
    "heightInInches": "over 9000"''
    "sayHello": function sayHello(){
      console.log("Hello!")
    }

};
