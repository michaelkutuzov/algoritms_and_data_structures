import type { NumArray } from '../types';

const mergeSort = (arr: NumArray): NumArray => {
  const merge = (arr1: NumArray, arr2: NumArray) => {
    let i = 0;
    let j = 0;
    /**
     * arr2 всегда больше или равен arr1 за счёт использования Math.floor
     * при вычислении индекса середины исходного массива
     * */
    return Array.from({ length: arr1.length + arr2.length }).map((_) => {
      let el = null;
      if (arr2[i] <= arr1[j] || arr1[j] === undefined) {
        el = arr2[i];
        i += 1;
      } else {
        el = arr1[j];
        j += 1;
      }

      return el;
    });
  };

  if (arr.length < 2) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const first = arr.slice(0, middleIndex);
  const second = arr.slice(middleIndex);

  return merge(mergeSort(first), mergeSort(second));
};

export default mergeSort;
