function isPalindrome(word) {
  // Write your algorithm here
 //iterate from the beginning to midle of a word
  for(let i=0;i<word.length/2;i++){
    //  check each letter to the corrsponding letter from the end
    //declare j which will begin at the end of the word as i start at the beginning

    const j =word.length -1-i
    // const startChar =word[i]
    // const endChar=word[j]
    


   // if (startChar !==endChar) {

  //to make the code cleaner and readerbility
  if(word[i] !==word[j]) {  
      return false
    }
    
  }
return true
}

/* 
  Add your pseudocode here

  iterate from the begin to middle of word
  check each letter to the corrsponding letter from the end
  if any letters do not match return false
  else return true
*/

/*
  Add written explanation of your solution here

  write a function that returns true if a word is a palindrome.
  this means the first letter is the same as the last letter 
  while the second letter is the same asthe second last letter and so forth
  until the middle

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
