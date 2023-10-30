function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

const numbers = [5, 3, 8, 1, 9, 4, 2];

bubbleSort(numbers);
const minNumber = numbers[0];

if (numbers.length === 0) {
  console.log("Масив порожній.");
} else {
  console.log("Мінімальне число в масиві: " + minNumber);
}
