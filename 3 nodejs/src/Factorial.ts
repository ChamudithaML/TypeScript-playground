import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function factorial(r1:readline.Interface){
    let number:number = 0;
    let factorialVal:number = 1;
    r1.question("Enter value: ",(k:string) =>{
        number = parseInt(k)

        for(let i=1; i<=number; i++){
            factorialVal = factorialVal*i;
        }

        console.log("Factorial of ",number," is ",factorialVal)

        r1.close();
    })    
}

factorial(rl)