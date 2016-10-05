// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(){
    //...
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(){
    //...
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    //...
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function isVowel(char){
  var vowels = [
    'a', 
    'e', 
    'i', 
    'o', 
    'u'
    ];

//return vowels.indexOf(char) !== -1; is also another way to do this.

  if(vowels.indexOf(char) !== -1) {
    return true
  } else {
    return false
  }
}

var str = "abcdef";

function rovarspraket(phrase){
  var newStr = "";
  for(var i = 0;i < phrase.length; i += 1) {
    if(isVowel(phrase[i])) {
      newStr += phrase[i]
    } else {
      newStr += phrase[i] + 'o' + phrase[i]
    }
  }
  return newStr
}

rovarspraket(str);


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

//shortcut version
function reverse(phrase){
  return phrase.split("").reverse().join("")    
}

//for loop version

function reverse(phrase){
  var newStr = ""

  for(var i = phrase.length -1; i >= 0; i -= 1){
    newStr += phrase[i]
  }
  return newStr
}












