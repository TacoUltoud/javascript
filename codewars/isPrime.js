function isPrime(n){
  if(n < 0) n = -n;
  if(n <= 1) return false;
  if(n <= 3) return true;
  if(!(n % 2)) return false;
  if(!(n % 3)) return false;
  var i = 5;
  var tmp = 2;
  while(i * i <= n){
    if(!(n % i)) return false;
    i += tmp;
    tmp = 6 - tmp;
  }
  return true;
}

function prime(n){
  if (n === 1) return false;
  else if ((n === 2)||(n === 3)) return true;
  for(var i = 2;i*i <= n;i++){
    if(!(n % i)) return false; 
  }
  return true;
}