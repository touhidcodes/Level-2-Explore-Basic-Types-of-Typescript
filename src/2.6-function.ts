//  Function
//  1. Normal Function
//  2. Arrow Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function add2(num1: number, num2: number = 10): number {
  return num1 + num2;
}

const addNumber = (num1: number, num2: number = 10): number => num1 + num2;

// Method

const poorUser = {
  name: "touhid",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is: ${this.balance + balance}`;
  },
};

//  Array Map

const array: number[] = [2, 3, 4, 5, 5];
const newArray: number[] = array.map((element: number) => element * element);
