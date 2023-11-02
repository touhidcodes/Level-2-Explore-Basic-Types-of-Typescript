"use strict";
{
    // nullable type
    const searchName = (value) => {
        console.log(value ? "Searching" : "Not found");
    };
    //  unknown type
    const convertMeterInPerSecond = (value) => {
        if (typeof value == "number") {
            const convertedValue = (value * 1000) / 3600;
            return convertedValue;
        }
        if (typeof value == "string") {
            const [result, unit] = value.split(" ");
            const convertedValue = (parseInt(result) * 1000) / 3600;
            return convertedValue;
        }
        else {
            return "your value is wrong";
        }
    };
    // Never  -->  that never return anything
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("muskil se error ho gaya");
}
