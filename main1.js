function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return -1; 
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const target = 5; 

const result = binarySearch(sortedArray, target);

if (result !== -1) {
  console.log(`Елемент ${target} знайдено під індексом ${result}.`);
} else {
  console.log(`Елемент ${target} не знайдено в масиві.`);
}
