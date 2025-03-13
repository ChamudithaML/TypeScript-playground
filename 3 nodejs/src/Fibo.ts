import * as readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput(): Promise<number> {
  return new Promise((resolve, reject) => {
    input.question("Enter value: ", (k: string) => {
      const number = parseInt(k);
      input.close();
      resolve(number);
    });
  });
}

function printFiboSequence(range: number) {
  let fiboArr: number[] = [];
  let x = 1;
  let y = 2;
  let temp = 0;
  for (let i = 0; i < range - 2; i++) {
    if (x === 1) {
      fiboArr.push(0, 1, 1);
    }

    temp = y;
    fiboArr.push(y);
    y = x + y;
    x = temp;
  }

  console.log("fibonacci sequence: ", fiboArr);
}

function getFibonacciValue(range: number) {
  let fiboArr: number[] = [];
  let x = 1;
  let y = 2;
  let temp = 0;
  for (let i = 0; i < range - 2; i++) {
    if (x === 1) {
      fiboArr.push(0, 1, 1);
    }

    temp = y;
    fiboArr.push(y);
    y = x + y;
    x = temp;
  }

  console.log("fibonacci value method 1: ", fiboArr[range]);
}

// using recursion
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

async function main() {
  const number = await getUserInput();
  printFiboSequence(number);
  getFibonacciValue(number);
  console.log("fibonacci value method 2: ", fibonacci(number));
}

main();
