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

function decode(input) {
  var result = "";
  var index = 0;
  for(var i = 0;i < input.length;i++){
    if(isNaN(input[i])){
      var str = input.substring(index,i);
      var num = Number(str);
      result += input[i].repeat(num);
      index = i + 1;
    }
  }
  return result;
}