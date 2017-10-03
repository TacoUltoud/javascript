function findNumber(array) {
  array.sort(function(a,b){return (a - b)});
  console.log(array);
  var res = [];
  var tmp = 1;
  for(var i = 0;i < array.length;++i){
    while(array[i] !== tmp){
      res.push(tmp);
      ++tmp;
    }
    ++tmp;
  }
  return res;
}

function findNumber_eff(array){
  var res = [];
  for(var i = 1;i <= Math.max.apply(null,array);++i){
    if(array.indexOf(i) < 0) res.push(i);
  }
  return res;
}
console.log(findNumber([13,11,10,3,2,20,4,5,6,7,8,25]));