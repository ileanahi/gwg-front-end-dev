/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var b = "";
var c = "";
while (num > 0) {

    // check value of num
    num === 1 ? b = "bottle" : b = "bottles";
    num === 2 ? c = "bottle" : c = "bottles";
    // print lyrics using num
    console.log(num + " " + b + " of juice on the wall! " + num + " " + b + " of juice! Take one down, pass it around... " + (num - 1) + " " + c + " of juice on the wall!");
    // don't forget to check pluralization on the last line!
    // decrement num
    num--;

}