const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i += 1) {
    let indexMin = i;
    for (let j = indexMin; j < arr.length; j += 1) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = temp;
  }

  return arr;
};

export default selectionSort;
