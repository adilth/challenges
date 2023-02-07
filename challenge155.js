/*Description //included in

*/

function binarySearch(arr, target) {
  return arr.indexOf(target);
}

//if array is sorted
/*
function binarySearch(arr, target) {
  return binarySearchImpl(arr, target, 0, arr.length - 1);
}

function binarySearchImpl(arr, target, left, right) {
  // Return immediately if the range to search is empty,
  // since the target element hasn't been found / won't be found.
  if (left > right) {
    return -1;
  }

  // Calculate the mid index to retrieve the mid element later.
  const mid = Math.floor((left + right) / 2);

  if (target < arr[mid]) {
    // If the target element is less than the middle element,
    // search the left half of the array and adjust the input
    return binarySearchImpl(arr, target, left, mid - 1);
  }

  if (target > arr[mid]) {
    // If the target element is greater than the middle element,
    // search the right half of the array and adjust the input
    return binarySearchImpl(arr, target, mid + 1, right);
  }

  // If the target element is equal to the middle element,
  // return the index of the middle element
  return mid;
}
*/
//Binary search has a time complexity of O(log(n)) in the average and worst case,

console.log(binarySearch([0, 4, 5, 2, 6, 9], 5)); //2
console.log(binarySearch([0, 4, 5, 2, 6, 9], 5)); //2
console.log(binarySearch([7, 4, 100, 20, 22, 9, 7, 30], 9)); //5
console.log(binarySearch([7, 4, 100, 20, 22, 9, 7, 30], 40)); //-1
