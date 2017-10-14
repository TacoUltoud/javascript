function selectionSort(arr){
  for(let i = 0;i < arr.length;i++){
    var min = arr[i];
    var minIndex = i;
    for(let j = i + 1;j < arr.length;j++){
      if(arr[j] < min){
        min = arr[j];
        minIndex = j;
      }
    }
    var tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
    console.log(arr);
  }
  return arr;
}
// time complexity O(n^2) best / worst / average
console.log(selectionSort([6,5,3,1,8,7,2,4]));