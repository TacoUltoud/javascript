var max = Number.MAX_VALUE;  //  1.7976931348623157e+308
function bigAdd(a,b) {
  var res = [];
  if((typeof a) !== "string") a += "";
  if((typeof b) !== "string") b += "";
  if((a[0] === "-") && (b[0] === "-")){
    a = a.substring(1);
    b = b.substring(1);
    return "-" + bigAdd(a,b);
  }
  else if((a[0] !== "-") && (b[0] === "-")){
    b = b.substring(1);
    if(+a > +b) return bigSub(a,b);
    else if(+a < +b) return  "-" + bigSub(b,a);
    else return "0";
  }
  else if((a[0] === "-") && (b[0] !== "-")){
    a = a.substring(1);
    if(+a > +b) return "-" + bigSub(a,b);
    else if(+a < +b) return  bigSub(b,a);
    else return "0";
  }
  else{
    if(a.length > b.length){
      var arr2 = ("0".repeat(a.length - b.length) + b).split("").reverse().map(i => +i);
      var arr1 = a.split("").reverse().map(i => +i);
    }
    else{
      var arr1 = ("0".repeat(b.length - a.length) + a).split("").reverse().map(i => +i);
      var arr2 = b.split("").reverse().map(i => +i);
    }
    for(let i = 0;i < arr1.length;i++){
      if((arr1[i] + arr2[i]) >= 10){
        res.push((arr1[i] + arr2[i] - 10));
        if(i === (arr1.length - 1)) res.push(1);
        else arr1[i + 1]++;
      }
      else res.push((arr1[i] + arr2[i]));
    }
    return res.reverse().join("");
  }
}

function bigSub(a,b) {
  var res = [];
  if((typeof a) !== "string") a += "";
  if((typeof b) !== "string") b += "";
  if((a[0] === "-") && (b[0] === "-")){
    a = a.substring(1);
    b = b.substring(1);
    if(+a > +b) return "-" + bigSub(a,b);
    else if(+a < +b) return bigSub(b,a);
    else return "0";
  }
  else if((a[0] !== "-") && (b[0] === "-")){
    b = b.substring(1);
    return bigAdd(a,b);
  }
  else if((a[0] === "-") && (b[0] !== "-")){
    a = a.substring(1);
    return "-" + bigAdd(a,b);
  }
  else{
    if(+a < +b){
      return "-" + bigSub(b,a);
    }
    else if(+a > +b){
      if(a.length > b.length){
        var arr2 = ("0".repeat(a.length - b.length) + b).split("").reverse().map(i => +i);
        var arr1 = a.split("").reverse().map(i => +i);
      }
      else{
        var arr1 = ("0".repeat(b.length - a.length) + a).split("").reverse().map(i => +i);
        var arr2 = b.split("").reverse().map(i => +i);
      }
      for(let i = 0;i < arr1.length;i++){
        if((arr1[i] < 0) || (arr1[i] < arr2[i])){
          arr1[i + 1]--;
          arr1[i] = arr1[i] +10;
          res.push(arr1[i] - arr2[i]);
        }
        else res.push(arr1[i] - arr2[i])
      }
      while(res[res.length - 1] === 0) res.pop();
      return res.reverse().join("");
    }
    else return "0";   
  }
}

function bigDiv(a,b){
  var count = "0";
  var tmp = [];
  var tmpCount = [];
  if((typeof a) !== "string") a += "";
  if((typeof b) !== "string") b += "";
  var aFlag = (a[0] === "-") ? true : false;
  var bFlag = (b[0] === "-") ? true : false;
  if(a[0] === "-") a = a.substring(1);
  if(b[0] === "-") b = b.substring(1);
  tmp.push(b);
  tmpCount.push("1");
  while(+a >= +tmp[0]){
    while(+a < +tmp[tmp.length - 1]){
      tmp.pop();
      tmpCount.pop();
    }
    a = bigSub(a,tmp[tmp.length - 1]);
    count = bigAdd(count,tmpCount[tmpCount.length - 1]);
    b = bigAdd(b,b);
    tmp.push(b);
    tmpCount.push(bigAdd(tmpCount[tmpCount.length - 1],tmpCount[tmpCount.length - 1]));
  }
  if(aFlag ^ bFlag) return ["-" + count,a]
  else return [count,a];
}
console.log(bigDiv(-100000000,"5"));