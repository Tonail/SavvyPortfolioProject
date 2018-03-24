/* globals $ */

var getPosts =  $.ajax( "https://jsonplaceholder.typicode.com/posts" );
// manually log post
var posts = [ {
    "id": 1,
    "user": "Tony Bush",
    "title": "Savvy Coders",
    "image": "https://google.com",
    "post": "That is not an image it is a link to google."


} ];


// dom lookups Here
function prependPost( blog ){
    var $user = $( "<h3>" ).text( blog.user );
    var $title = $( "<h2>" ).text( blog.title );
    var $image = $( "<img>" ).attr( "src", blog.image );
    var $content = $( "<p>" ).text( blog.post );
    var $post = $( "#output" ).append( "div" ).append( $image, $title, $user, $content );

    $( "#output" ).prepend( $post );
    console.log( $post );
}

// prepend each current post to page
posts.forEach( prependPost );
// css here


// takes form data and organizes it for page submition
$( "form" ).on( "submit", ( event ) => {
    var data = $( event.target ).serializeArray();
    var formObject = {};

    // prevents page reload
    event.preventDefault();
    // form a object of each name and value pair
    data.forEach( ( field ) => {
        formObject[ field.name ] = field.value;
    } );
    // sets id of post to one longer than the total posts
    formObject.id = posts.length + 1;
    // appends post to page
    posts.push( formObject );
    prependPost( formObject );
    // logs results of function to console for testing
    console.log( posts );
} );
