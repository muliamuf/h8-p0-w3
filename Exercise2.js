function balikString (kata){
  var tmp = ''
  for (var i = kata.length-1; i>=0; i--){
    tmp+=kata[i];
  }
   return tmp
}
console.log(balikString('Hello World!'));
