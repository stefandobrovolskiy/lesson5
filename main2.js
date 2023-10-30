function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const numbers = [5, 3, 8, 1, 9, 4, 2]; 

console.log("До сортування:", numbers);
const sortedNumbers = bubbleSort(numbers);
console.log("Після сортування:", sortedNumbers);
