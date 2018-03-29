/* globals $ */
var $contact = $( "#content > div:nth-child(2) > button" );
var $form = $( ".form" );

$contact.click( function(){
    $form.slideToggle( "swing" );
} );
