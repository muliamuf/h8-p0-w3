function palindrome(kata) {
  var balik = '';
  for(var i=kata.length-1;i>=0;i--){
    balik+=kata[i];
    // console.log(kata);
  }
  return balik===kata;// you can only write your code here!
  // return kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
