const invCount = (arr: number[]) => {
  const splitEnvCount = (arr1: number[], arr2: number[]) => {};

  if (arr.length < 2) return 0;

  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);

  return (
    invCount(firstHalf) +
    invCount(secondHalf) +
    splitEnvCount(firstHalf, secondHalf)
  );
};

export default invCount;
