/* globals $ */
var $fa = $( ".menuButton" );
var $subMenuButton = $( ".sub-menu .sub-menu > a" );
var $subMenu = $( ".sub-menu .sub-menu ul" );
var $menu = $( "nav" );

$fa.click( function(){
    $menu.slideToggle( "swing" );
} );

$subMenuButton.click( function(){
    $subMenu.slideToggle( "swing" );
} );
