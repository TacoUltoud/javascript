function encode(input) {
  var letter = input[0];
  var string = "";
  var count = 0;
  for (var i = 0;i < input.length;i++)
  {
    if (letter === input[i]) {
      count++;
    }
    else{
      string += count + letter;
      letter = input[i];
      count = 1;
    }
  }
  string += count + letter;
  return string;
}