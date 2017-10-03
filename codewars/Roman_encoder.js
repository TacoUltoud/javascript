function romanEncoder(number){
  var res = "";
  var tmp;
  tmp = Math.floor(number / 1000);
  res += "M".repeat(tmp);
  number %= 1000;
  if(Math.floor(number / 100) === 9){
    number -= 900;
    res += "CM"
  }

  tmp = Math.floor(number / 500);
  res += "D".repeat(tmp);
  number %= 500;

  tmp = Math.floor(number / 100);
  if(tmp > 3) res += "CD";
  else res += "C".repeat(tmp);
  number %= 100;
  if(Math.floor(number / 10) === 9){
    number -= 90;
    res += "XC"
  }

  tmp = Math.floor(number / 50);
  res += "L".repeat(tmp);
  number %= 50;

  tmp = Math.floor(number / 10);
  if(tmp > 3) res += "XL";
  else res += "X".repeat(tmp);
  number %= 10;
  if(number === 9){
    number -= 9;
    res += "IX"
  }

  tmp = Math.floor(number / 5);
  res += "V".repeat(tmp);
  number %= 5;

  tmp = Math.floor(number / 1);
  if(tmp > 3) res += "IV";
  else res += "I".repeat(tmp);

  return res;
}

function romanEncoder_eff(num){
  var res = "";
  var std = {M: 1000,CM: 900,D: 500,C: 100,XC: 90,L: 50,XL: 40,X: 10,IX: 9,V: 5,IV: 4,I: 1}
  for(let key in std){
    while(num >= std[key]){
      res += key;
      num -= std[key];
    }
    if(num <= 0) break;
  }
  return res;
}