"use strict";
{
    //  Function
    //  1. Normal Function
    //  2. Arrow Function
    function add(num1, num2) {
        return num1 + num2;
    }
    function add2(num1, num2 = 10) {
        return num1 + num2;
    }
    const addNumber = (num1, num2 = 10) => num1 + num2;
    // Method
    const poorUser = {
        name: "touhid",
        balance: 0,
        addBalance(balance) {
            return `My new balance is: ${this.balance + balance}`;
        },
    };
    //  Array Map
    const array = [2, 3, 4, 5, 5];
    const newArray = array.map((element) => element * element);
}
