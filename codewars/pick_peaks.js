function pickPeaks(arr){
  var peak = [];
  var pos = [];
  var tmp = [];
  var count = 0;
  for(let i = 0;i < (arr.length - 1);i++){
    tmp.push(arr[i + 1] - arr[i]);
  }
  for(let i = 0;i < (tmp.length - 1);i++){
    if((tmp[i] > 0) && (tmp[i + 1] < 0)){
      pos.push(i + 1);
      peak.push(arr[i + 1]);
    }
    if((tmp[i] > 0) && (tmp[i + 1] === 0)){
      i++;
      while((i < tmp.length) && (tmp[i] === 0) && (tmp[i + 1] === 0)){
        count++;
        i++;
      }
      if((i < (tmp.length - 1)) && (tmp[i] === 0) && (tmp[i + 1] < 0)){
        pos.push(i - count);
        peak.push(arr[i - count]);
      }
      if((tmp[i] === 0) && (tmp[i + 1] > 0)) count = 0;
    }
  }
  return {"pos": pos,"peaks": peak}
}

function pickPeaks_eff(arr){
  var result = {pos: [],peaks: []};
  if(arr.length > 2) {
    var pos = -1;
    for(var i = 1;i < arr.length;i++){
      if(arr[i] > arr[i - 1]) {
        pos = i;
      }
      else if((arr[i] < arr[i - 1]) && (pos !== -1)){
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }
  return result;
}

console.log(pickPeaks_eff([2,2,2,2,2,2,1]))