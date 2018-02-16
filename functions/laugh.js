/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(max) {
    var laughter = "";
    for (var i = 1; i <= max; i++) {
        laughter += "ha";
    }
    return laughter + "!";

}

console.log(laugh(10));