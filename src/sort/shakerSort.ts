import type { NumArray } from '../types';

const shakerSort = (arr: NumArray) => {
  if (arr.length < 2) return arr;

  const swap = (arr: NumArray, index1: number, index2: number) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    for (let i = start; i <= end; i += 1) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }

    end -= 1;

    for (let i = end; i >= start; i -= 1) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }

    start += 1;
  }

  return arr;
};

export default shakerSort;
