function gcd(a,b){
  while (Math.min(a,b) !== 0){
    if (a > b) a = a % b;
    else b = b % a;
  }
  return Math.max(a,b);
}