function stamp(arr){
  var res = [];
  var tmp;
  for(var i = 0;i < arr.length;i++){
    for(var j = 0;j < arr.length;j++){
      for(var k = 0;k < arr.length;k++){
        tmp = arr[i] + arr[j] + arr[k];
        res.push(tmp);
      }
    }
  }
  res.sort(function(a,b){return (a-b)});
  console.log(res);
}
stamp([1,2,5,20]);