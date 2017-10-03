function nextSmaller(n){
  var arr = ("" + n).split("").map(a => +a);
  for(let i = (arr.length - 1);i > 0;i--){
    let tmp = arr[i - 1];
    if(tmp > arr[i]){
      let subArr = arr.splice((i - 1),(arr.length - (i - 1)));
      subArr.sort((a,b) => (b - a));
      let index = subArr.findIndex(a => (a < tmp));
      arr = arr.concat(subArr.splice(index,1).concat(subArr));
      if(arr[0] === 0) return -1;
      else return +arr.join("");
    }
  }
  return -1;
}
console.log(nextSmaller(2017));
