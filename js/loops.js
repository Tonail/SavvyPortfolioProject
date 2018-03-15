var output = $( "#loops" );
var list = "<ol>";

var fizzyBuzz = "<ul>";


for( let i = 1; i <= 10; i++ ){
    list += "<li>" + i + "</li>";
}

list += "</ol>";

$( output )
    .append( list );


for( let i = 1; i <= 100; i++ ){
    if( i % 3 === 0 && i % 5 === 0 ){
        fizzyBuzz += "<li>" + i + "fizzbuzz" + "</li>";
    }
    else if( i % 3 === 0 ){
        fizzyBuzz += "<li>" + i + "fizz" + "</li>";
    }
    else if( i % 5 === 0 ){
        fizzyBuzz += "<li>" + i + "buzz" + "</li>";
    }
    else{
        fizzyBuzz += "<li>" + i + "</li>";
    }
}

fizzyBuzz += "</ul>";

$( output )
    .append( fizzyBuzz );
