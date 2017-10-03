var maxSequence = function(arr){
  var res = [];
  var elm = [];
  for(var i = 0;i < arr.length;i++){
    if(arr[i] >= 0){
      elm.push(i);
      var val = [];
      var tmp = 0;
      for(var j = i;j < arr.length;j++){
        tmp += arr[j];
        val.push(tmp);
      }
      var max = Math.max.apply(null,val);
      res.push(max);
      for(var k = 0;k < val.length;k++){
        if(max === val[k]) elm.push(k);
      }
    }
  }
  console.log(elm);
  maxRes = Math.max.apply(null,res);
  for(var l = 0;l < val.length;l++){
    if(maxRes === elm[l]){
      var tmpindex = l - 1;
      var tmpmax = l;
    }
  }
  return maxRes ;
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))