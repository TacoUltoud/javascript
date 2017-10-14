function mergeSort(arr){
  function merge(array,start,middle,end){
    var tmp = [];
    var nowIndex = 0;
    var left = start;
    var right = middle + 1;
    while((left <= middle) && (right <= end)){
      if(array[left] < array[right]){
        tmp[nowIndex] = array[left];
        nowIndex++;
        left++;
      }
      else{
        tmp[nowIndex] = array[right];
        nowIndex++;
        right++;
      }
    }
    while(left <= middle){
      tmp[nowIndex] = array[left];
      nowIndex++;
      left++;
    }
    while(right <= end){
      tmp[nowIndex] = array[right];
      nowIndex++;
      right++;
    }
    for(let i = start;i <= end;i++){
      array[i] = tmp[i - start];
    }
  }
  function _mergeSort(array,start,end){
    if(start >= end) return;
    var middle = Math.floor((start + end) / 2);
    _mergeSort(array,start,middle);
    _mergeSort(array,middle + 1,end);
    merge(array,start,middle,end);
    return array;
  }
  return _mergeSort(arr,0,arr.length - 1);
}
// time complexity theta(nlogn)
console.log(mergeSort([6,5,3,1,8,7,2,10,4]));