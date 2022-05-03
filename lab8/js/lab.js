/*
 * author: Shimao Zhou Cole Keeton
 * created: May 2nd
 * license:
 *
 */

//Anon funciton and CallBacks

myArray=[20,40,52,61,139,933]
function square(x) {
    return (x*x);
}
//test fucntion
console.log("test1",square(2));
console.log("test2",square(8));
myArray=[20,40,52,61,139,933]
var result = myArray.map(square);
console.log("myArray",result);
var result= myArray.map(function(x){
    return Math.sqrt(x);
})
console.log("newArray",result);
var outputEl = document.getElementById("output");
outputEl.innerHTML = result;
