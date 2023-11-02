"use strict";
{
    //  spread operator
    const array1 = ["hi", "hello", "bye"];
    const array2 = ["go", "to", "hell"];
    array1.push(...array2);
    const mentor1 = {
        typescript: "mentor1",
        dbms: "mentor2",
        prisma: "mentor3",
    };
    const mentor2 = {
        cloud: "mentor4",
        next: "mentor5",
        azure: "mentor6",
    };
    const mentor = Object.assign(Object.assign({}, mentor1), mentor2);
    //  rest operator
    const greetings = (...friend) => {
        friend.forEach((friend) => console.log(`hi ${friend}`));
    };
    greetings("alam", "kalam", "balam");
    //  destructuring
}
