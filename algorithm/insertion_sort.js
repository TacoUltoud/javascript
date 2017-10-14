function insertionSort(arr){
  for(let i = 1;i < arr.length;i++){
    var value = arr[i];
    var position = i;
    while((position > 0) && (arr[position - 1] > value)){
      arr[position] = arr[position - 1];
      position--;
    }
    arr[position] = value;
    console.log(arr);
  }
  return arr;
}
// time complexity O(n^2) wrost / average
// best O(n) when input is sorted
console.log(insertionSort([6,5,3,1,8,7,2,4]));