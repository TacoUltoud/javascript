function quickSort(arr){
  function swap(arr,i,j){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  function partition(arr,start,end){
    var splitIndex = start + 1;
    for(let i = start + 1;i <= end;i++){
      if(arr[i] < arr[start]){
        swap(arr,i,splitIndex)
        splitIndex++;
      }
    }
    swap(arr,start,splitIndex - 1);
    return splitIndex - 1;
  }
  function _quickSort(arr,start,end){
    if(start >= end) return;
    var middle = partition(arr,start,end);
    _quickSort(arr,start,middle - 1);
    _quickSort(arr,middle + 1,end);
    return arr;
  }
  return _quickSort(arr,0,arr.length - 1);
}
// if pick minimun as pivot complexity O(n^2)
// best case O(nlogn) the pivot is in the middle
console.log(quickSort([6,5,3,1,8,7,2,10,4]));