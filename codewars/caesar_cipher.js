function movingShift(s, shift) {
  var num,tmp,index = 0;
  var str = ["","","","",""];
  if((s.length % 5) === 0) num = s.length / 5;
  else num = Math.floor(s.length / 5) + 1;
  for(let i = 0;i < s.length;i++){
    if(/[a-z]/.test(s[i])){
      tmp = s.charCodeAt(i) + (shift + i) % 26;
      if(tmp > 122) tmp -= 26;
    }
    else if(/[A-Z]/.test(s[i])){
      tmp = s.charCodeAt(i) + (shift + i) % 26;
      if(tmp > 90) tmp -= 26;
    }
    else if(/[0-9]/.test(s[i])){
      tmp = s.charCodeAt(i) + (shift + i) % 10;
      if(tmp > 57) tmp -= 10;
    }
    else tmp = s.charCodeAt(i);
    str[index] += String.fromCharCode(tmp);
    if(str[index].length === num) index++;
  }
  return str;
}

function demovingShift(arr,shift){
  var tmp , str = "" , res = "";
  for(let i = 0;i < arr.length;i++){
    str += arr[i];
  }
  for(let i = 0;i < str.length;i++){
    if(/[a-z]/.test(str[i])){
      tmp = str.charCodeAt(i) - (shift + i) % 26;
      if(tmp < 97) tmp += 26;
    }
    else if(/[A-Z]/.test(str[i])){
      tmp = str.charCodeAt(i) - (shift + i) % 26;
      if(tmp < 65) tmp += 26;
    }
    else if(/[0-9]/.test(str[i])){
      tmp = str.charCodeAt(i) - (shift + i) % 10;
      if(tmp < 48) tmp += 10;
    }
    else tmp = str.charCodeAt(i);
    res += String.fromCharCode(tmp);
  }
  return res;
}

function encodeStr(s, shift) {
  var tmp,index = 0;
  var str = ["","","","",""];
  var num = s.length + 2;
  if((num % 5) === 0) num = s.length / 5;
  else num = Math.floor(num / 5) + 1;
  str[0] += (s[0].toLowerCase() + (String.fromCharCode(s[0].toLowerCase().charCodeAt() + 1)));
  for(let i = 0;i < s.length;i++){
    if(/[a-z]/.test(s[i])){
      tmp = s.charCodeAt(i) + shift;
      if(tmp > 122) tmp -= 26;
    }
    else if(/[A-Z]/.test(s[i])){
      tmp = s.charCodeAt(i) + shift;
      if(tmp > 90) tmp -= 26;
    }
    else tmp = s.charCodeAt(i);
    str[index] += String.fromCharCode(tmp);
    if(str[index].length === num) index++;
  }
  return str;
}

function decode(arr){
  var tmp , str = "" , res = "";
  for(let i = 0;i < arr.length;i++){
    str += arr[i];
  }
  for(let i = 2;i < str.length;i++){
    if(/[a-z]/.test(str[i])){
      tmp = str.charCodeAt(i) - 1;
      if(tmp < 97) tmp += 26;
    }
    else if(/[A-Z]/.test(str[i])){
      tmp = str.charCodeAt(i) - 1;
      if(tmp < 65) tmp += 26;
    }
    else tmp = str.charCodeAt(i);
    res += String.fromCharCode(tmp);
  }
  return res;
}