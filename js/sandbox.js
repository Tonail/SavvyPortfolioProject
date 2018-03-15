/* glbals '$' */

var css = {
    "width": "100vw",
    "font-size": "100%",
    "color": "orange",
    "top": 0,
    "position": "fixed"
};

var $h1 = $( "<h1>" )
    .text( "Hello World" )
    .css( css );

var $h1Two = $( "<h1>TACOCAT</h1>" );

var $img = $( '<img  src="../../media/OCAT-Foreground-02.png"/>' )
    .css( css );

var animations = {
    "font-size": "500%",
    "top": "100px"
};
var animate$h1 = function animate$h1(){
    $h1.animate( {
        "left": "100vw"
    } );
};

var animate$h1Two = function animate$h1(){
    $h1Two.animate( {
        "left": "100vw"
    } );
};


var animationOptions = {
    "duration": 7000,
    "complete": animate$h1,
};

$( "#output" )
    .append( $img )
    .append( $h1 )
    .append( $h1Two )
    .animate( animations, animationOptions );
