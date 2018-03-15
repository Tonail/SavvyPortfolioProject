var fa = $( ".menuButton" );

$( fa ).click( function(){
    $( "nav" ).toggle();
} );


/*
$( fa ).click( function(){
    if( $( "nav ul" ).css( "display" ) === "none" ){
        $( "nav ul" ).css( "display", "flex" );
    }
    else if( $( "nav ul" ).css( "display" ) === "flex" ){
        $( "nav" ).css( "display", "none" ) ;
    }
} );
*/
