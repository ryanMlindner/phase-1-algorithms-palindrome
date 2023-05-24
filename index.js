function isPalindrome(word) {
  // Write your algorithm here
  const length = word.length;
  let comparisonCount = 0;
  let palindrome = true;
  
  for(let index = 0; index < length/2; index++) {
    reverseIndex = length - (index + 1);
    if (index === reverseIndex) {
      break;
    }
    comparisonCount += 1; //assuming complexity relies on number of comparisons
    if (word.charAt(index) !== word.charAt(reverseIndex)) {
      palindrome = false;
      break;
    }
  }
  
  //when I did it myself I had some UI connections for complexity
  //const complexity = `For a string of length ${length}, the algorithm had to make
  //${comparisonCount} comparisons`;
  return palindrome;
}

/* 
  Add your pseudocode here
  given a string
  if the first and last index are the same character
    compare the first +1 and last -1 index until either
      there is only 1 character (has to be the same as itself)
      OR there is a mismatch (done, failed)
  if no comparison failed, string is a palindrome
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
