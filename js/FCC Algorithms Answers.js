// Implement Bubble Sort
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return array;
}
