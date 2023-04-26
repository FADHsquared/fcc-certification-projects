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

// Implement Selection Sort
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) minIdx = j;
    }

    if (minIdx !== i) [array[i], array[minIdx]] = [array[minIdx], array[i]];
  }

  return array;
}

// Implement Insertion Sort
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const takenVal = array[i];
    let holeIdx = i;

    while (holeIdx > 0 && array[holeIdx - 1] > takenVal) {
      array[holeIdx] = array[holeIdx - 1];
      holeIdx--;
    }

    array[holeIdx] = takenVal;
  }

  return array;
}
