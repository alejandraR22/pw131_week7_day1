//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords( dog_string, dog_names){
    const namesFound = [];

    for(const name of dog_names) {
        if(dog_string.toLowerCase().includes(name.toLowerCase())) {
            namesFound.push(' Matched {dog_names}');
        }
    }

    if(namesFound.length > 0) {
        console.log(namesFound.join(','))
    } else {
        console.log("No Matches");
    }
}
findWords(dog_string, dog_names)

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i +=2) {
        arr.splice(i, 1, "even indes");
   }
}
const arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]
replaceEvens(arr)
console.log(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Codewars Problem
// * In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//Examples:
//makeNegative(1);    // return -1
//makeNegative(-5);   // return -5
//makeNegative(0);    // return 0
//makeNegative(0.12); // return -0.12
//Notes
//The number can be negative already, in which case no change is required.
//Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(number) {
    if (number > 0) {
        return -number
    } else {
        return number
    }
}
console.log(makeNegative(-1))
console.log(makeNegative(-5))
console.log(makeNegative(0))


// codewars problem
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function evenOrOdd(number) {
    if (number % 2 == 0) {
      return "Even"
    } else {
      return "Odd"
    }
  }
  console.log(evenOrOdd(4))
  console.log(evenOrOdd(7))