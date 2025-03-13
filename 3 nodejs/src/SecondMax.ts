function generateRandomArray(
  length: number,
  min: number,
  max: number
): number[] {
  let randomArray: number[] = [];

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNumber);
  }

  return randomArray;
}

function findSecondMax(numArray: number[]): number {
  let max = 0;
  let secondMax = 0;
  numArray.forEach((num) => {
    if (num > secondMax) {
      if (num > max) {
        secondMax = max;
        max = num;
      } else {
        secondMax = num;
      }
    }
  });

  return secondMax;
}

function main() {
  let numArray: number[] = [5, 2, 6, 20, 8, 3, 2, 15, 7, 14, 9, 4, 10];
  let numArray2 = generateRandomArray(10, 0, 100);
  let secondMax: number = findSecondMax(numArray2);

  console.log("Array: ", numArray2);
  console.log("Second max of the array is:", secondMax);
}

main();
