function probability(n){
  var res = 1;
  for(let i = 365;i > 365 - n;i--){
    res *= i / 365;
  }
  return 1 - res;
}
// n >= 23 then p > 50%