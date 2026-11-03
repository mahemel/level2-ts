// Top types
let x: any = 10;
x = "Hello";
console.log(x);

const something: unknown = "Hello, World!";
//something.length; // Error: Object is of type 'unknown'.

// Core Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: readonly [string, number] = ["hello", 10];

console.log("Tuple:", tuple);

const voidFunction = () => {
    console.log("This function returns nothing.");
};
voidFunction();
