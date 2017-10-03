function romanDecoder(roman){
  var num = 0;
  for(let i = 0;i < roman.length;i++){
    if(((roman[i] === "C") && (roman[i + 1] === "M")) || ((roman[i] === "C") && (roman[i + 1] === "D")) || ((roman[i] === "X") && (roman[i + 1] === "C")) || ((roman[i] === "X") && (roman[i + 1] === "L")) || ((roman[i] === "I") && (roman[i + 1] === "X")) || ((roman[i] === "I") && (roman[i + 1] === "V"))){
      num += transfer(roman[i] + roman[i + 1]);
      i++;
    }
    else num += transfer(roman[i]);
  }
  return num;
}

function transfer(str){
  switch(str){
    case "M": return 1000;
    case "CM": return 900;
    case "D": return 500;
    case "CD": return 400;
    case "C": return 100;
    case "XC": return 90;
    case "L": return 50;
    case "XL": return 40;
    case "X": return 10;
    case "IX": return 9;
    case "V": return 5;
    case "IV": return 4;
    case "I": return 1;
    default: return 0;
  } 
}

function romanDecoder_eff(str){
  var std = {M: 1000,D: 500,C: 100,L: 50,X: 10,V: 5,I: 1}
  var tmp = str.split("");
  var num = 0;
  for(let i = 0;i < tmp.length;i++){
    if((i < (tmp.length - 1)) && (std[tmp[i]] < std[tmp[i + 1]])){
      num += (std[tmp[i + 1]] - std[tmp[i]]);
      i++
    }
    else num += std[tmp[i]]
  }
  return num;
}

function romanDecoder_eff2(str){
  var std = {M: 1000,D: 500,C: 100,L: 50,X: 10,V: 5,I: 1}
  return str.split("").map(d => std[d]).reduce((s,v,i,a) => s + ((a[i + 1] > v) ? -v : v) , 0);
  // return str;
}
console.log(romanDecoder_eff2("IX"));