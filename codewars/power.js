function power(x , n){
  var result = 1;
  var tmp = x;
  while(n){
    if(n % 2){
      result *= tmp;
      tmp *= tmp;
      n = (n - 1) / 2;
    }
    else{
      tmp *= tmp;
      n /= 2;
    }
  }
  return result;
}
console.log(power(3,5));