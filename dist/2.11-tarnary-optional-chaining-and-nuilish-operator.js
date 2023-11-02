"use strict";
var _a, _b;
{
    // ternary operator
    const age = 18;
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
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
    const middleName = (_b = (_a = person === null || person === void 0 ? void 0 : person.name) === null || _a === void 0 ? void 0 : _a.middleName) !== null && _b !== void 0 ? _b : "Not Found";
    console.log({ middleName });
    //  nullish coalescing operator
    //  null / undefined --> decision making
    const isAuthenticated = null; // null / undefined
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "guest";
    const result2 = isAuthenticated ? isAuthenticated : "guest";
    console.log({ result1 }, { result2 });
}
