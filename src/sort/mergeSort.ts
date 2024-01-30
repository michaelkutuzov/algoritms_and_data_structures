const mergeSort = (arr: number[]): number[] => {
  const merge = (arr1: number[], arr2: number[]) => {
    const [longest, shortest] =
      arr1.length >= arr2.length ? [arr1, arr2] : [arr2, arr1];

    let i = 0;
    let j = 0;

    return Array.from({ length: arr1.length + arr2.length }).map((_) => {
      let el = null;
      if (longest[i] < shortest[j] || shortest[j] === undefined) {
        el = longest[i];
        i += 1;
      } else {
        el = shortest[j];
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
