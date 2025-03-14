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

function printStarsPattern1(value: number) {
  let stars: string = "";
  for (let i = 0; i < value; i++) {
    stars += "*";
    console.log(stars);
  }
}

function printStarsPattern2(value: number) {
  let newVal = value;
  let stars: string = "";
  for (let i = 0; i <= value; i++) {
    for (let j = 0; j <= newVal; j++) {
      stars += "*";
    }
    console.log(stars);
    stars = "";
    newVal--;
  }
}

async function main() {
  const number = await getUserInput();
  //   printStarsPattern1(7);
  //   printStarsPattern2(5);
}

main();
