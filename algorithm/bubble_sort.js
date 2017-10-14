function bubbleSort(arr){
  for(let i = 0;i < arr.length;i++){
    for(let j = 0;j < arr.length - i - 1;j++){
      if(arr[j] > arr[j + 1]){
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
// time complexity O(n^2) wrost / average
// best O(n) when input is sorted

function bubbleSort_eff(arr){
  for(let i = 0;i < arr.length;i++){
    var swap = false;
    for(let j = 0;j < arr.length - i - 1;j++){
      if(arr[j] > arr[j + 1]){
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swap = true;
      }
    }
    if(!swap) break;
  }
  return arr;
}
console.log(bubbleSort_eff([6,5,3,1,8,7,2,10,4]));