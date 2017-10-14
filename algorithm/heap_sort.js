function heapSort(arr){
  function heapify(arr,length,node){
    const left = node * 2 + 1;
    const right = node * 2 + 2;
    var max = node;
    if((left < length) && (arr[left] > arr[max])) max = left;
    if((right < length) && (arr[right] > arr[max])) max = right;
    if(max !== node){
      [arr[node] , arr[max]] = [arr[max] , arr[node]];
      heapify(arr,length,max);
    }
  }
  for(let i = Math.floor(arr.length / 2) - 1;i >= 0;i--){
    heapify(arr,arr.length,i);
  }
  // put the maximum to the end of the array every loop
  for(let i = arr.length - 1;i >= 0;i--){
    [arr[0] , arr[i]] = [arr[i] , arr[0]];
    heapify(arr,i,0);
  }
  return arr;
}
console.log(heapSort([6,5,3,1,8,7,2,10,4]))