"use strict";
{
    //  destructuring
    //  1. Object
    // 2. Array
    //  Object Destructing
    const person = {
        id: 232,
        name: {
            firstName: "Touhidur",
            lastName: "Zaman",
        },
        contact: {
            phone: "0144444444",
            address: "sarsha",
        },
    };
    const { id, name: { firstName }, contact: { phone }, } = person;
    //  Array Destructing
    const myFriends = ["mamun", "mehedi", "Gim", "babu", "unda", "banda"];
    const [, , bestFriend, ...rest] = myFriends;
}
