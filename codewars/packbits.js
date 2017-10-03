function hextostr(hex){
  return hex.split(" ").map(function(str){return parseInt(str,16)});
}
function dc(data){
  var res = "";
  var i = 0;
  while(i < (data.length - 1)){
    var tmp = data[i];
    if(tmp >= 128){ 
      tmp = 256 - tmp;
      for(var j = 0;j <= tmp;j++){
        res += data[i + 1];
      }
    i++;
    }
    else{
      for(var k = 0;k <= tmp;k++){
        res += data[i + k + 1];
      }
      i += k
    }
    i++;
  }
  return res;
}
console.log(hextostr("FE AB 02 AA"));