// basic data types

// impressive: TS compiler can infer data types
//  expressive: Externally define data types

//  1. String
let string: string = "hello world";

// 2. Number
let number: number = 23;

//  3. Boolean
let isAdmin: boolean = true;

//  4. Undefined
let x: undefined = undefined;

//  5. Null
let y: null = null;

let n: number;

//  Array

const friendsName: string[] = ["touhidur", "zaman"];
const eligibleRoll: number[] = [2, 4, 5, 6];

// Tuple --> type of array --> order --> type of value

let coordinates: [number, number] = [2, 5];
let info: [string, number, boolean] = ["touhid", 24, true];
