/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    console.log(x % 3 ? x % 5 ? x : "James" : x % 5 ? "Julia" : "JuliaJames")
        // print Julia, James, or JuliaJames

    // increment x
    x++
}