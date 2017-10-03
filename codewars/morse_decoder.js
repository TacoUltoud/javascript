function decodeMorse(morseCode){
  var arr = morseCode.split(" ");
  var res = "";
  while(arr[0] === "") arr.shift();
  while(arr[arr.length - 1] === "") arr.pop();   
  for(let i = 0;i < arr.length;i++){
    if(arr[i] !== "") res += MORSE_CODE[arr[i]];
    else if((arr[i] === "") && (arr[i + 1] === "")){
      res += " ";
    }
  }
  return res;
}

function decodeMorse_eff(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}