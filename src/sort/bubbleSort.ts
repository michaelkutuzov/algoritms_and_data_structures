const bubbleSort = (arr: number[]) => {
  for (let limit = arr.length - 1; limit > 0; limit -= 1) {
    for (let i = 0; i < limit; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
};

export default bubbleSort;
