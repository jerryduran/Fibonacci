// Calculates the Fibonacci number recursively of a given number(n).
// Prints a Tree that represents the calculation of a given number(n)
// Time Complexity = O(2^N)
// Space Complexity = O(N)

var n=6;
console.log("fibNum(",n,")");
console.log("nth Fibonacci Number:",fibNum(n));
function fibNum(n) {
    if(n <= 1) 
        return n;
    console.log("fibNum(",n-1,") + fibNum(",n-2,")")
    return fibNum(n-1) + fibNum(n-2);

}