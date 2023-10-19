function insertionSort(arr, newElement) {
  if (arr.length === 0) {
    arr[0] = newElement;
  } else {
    let i=0;
    while (i < arr.length && arr[i] < newElement) {
      i++;
    }
    for (let j = arr.length; j > i; j--) {
      arr[j] = arr[j - 1];
    }
    arr[i] = newElement;
  }
  console.log('Sorted Array:'+ sortedArray)
}
var sortedArray = [];
insertionSort(sortedArray, 12);
insertionSort(sortedArray, 2);
insertionSort(sortedArray, 13);
insertionSort(sortedArray, 5);
