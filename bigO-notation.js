// constant runtime
// Big O Nonation: 'O(1)'
function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}
//=============================================

// Linear runtime
// Big O Nonation: 'O(n)'
function logAll(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
//=============================================

// Exponetial runtime
// Big O Nonation: 'O(n^2)'
function addAndLog(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

//=============================================
// Logarithmic runtime
// Big O Nonation: 'O(log n)'
function binarySearch(array, key) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
