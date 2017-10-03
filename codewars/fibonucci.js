// using loop to compute F(n)
function fibonucci(n){
  var prev = 0;
  var later = 1;
  var tmp;
  if(n <= 1) return n;
  for(var i = 2;i <= n;i++){
    tmp = prev + later;
    prev = later;
    later = tmp;
  }
  return tmp;
}
// time complexity O(n)
// using matrix to compute F(n)
function fib(n){
  var x = 1
  var xtmp = 1;
  var y = 1;
  var ytmp = 1;
  var z = 0;
  var ztmp = 0;
  var a = 1;
  var atmp = 1;
  var b = 0;
  var btmp = 0;
  while(n){
    if(n % 2){
      atmp = x * a + y * b;
      btmp = y * a + z * b;
      a = atmp;
      b = btmp;
      xtmp = x * x + y * y;
      ytmp = x * y + y * z;
      ztmp = y * y + z * z;
      x = xtmp;
      y = ytmp;
      z = ztmp;
      n = (n - 1) / 2;
    }
    else{
      xtmp = x * x + y * y;
      ytmp = x * y + y * z;
      ztmp = y * y + z * z;
      x = xtmp;
      y = ytmp;
      z = ztmp;
      n /= 2;
    }
  }
  return b;
}
// time complexity O(log(n))
var str1 = "";
var str2 = "";
for(var i = 0;i < 15;++i){
  str1 += fib(i) + " ";
}
for(var i = 0;i < 15;++i){
 str2 += fibonucci(i) + " "; 
}
console.log(str1);
console.log(str2);