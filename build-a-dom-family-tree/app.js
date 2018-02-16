/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
$("<div id=\"family2\"></div>").insertAfter("#family1");
$("#family2").append("<div id=\"bruce\"></div>");
$("#bruce").append("<div id=\"madison\"></div>").append("<div id=\"hunter\"></div>");