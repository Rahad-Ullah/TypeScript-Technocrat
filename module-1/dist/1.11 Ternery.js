"use strict";
var _a, _b;
{
    // * Ternary Operator
    var age = 18;
    var isAdult = age >= 18 ? 'adult' : 'not adult';
    // console.log({isAdult});
    // * nullish coalescing operator
    // null / undefined --> decision making
    var isAuthenticated = '';
    var result1 = isAuthenticated ? isAuthenticated : 'Guest'; // ternary
    var result2 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest'; // nullish coalescing
    var user_1 = {
        name: 'Rahad',
        address: {
            city: 'Sylhet',
            road: 'Ambarkhana',
            presentAddress: 'Sylhet Town',
        }
    };
    var parmanentAddress = (_b = (_a = user_1 === null || user_1 === void 0 ? void 0 : user_1.address) === null || _a === void 0 ? void 0 : _a.parmanentAddress) !== null && _b !== void 0 ? _b : 'No address found';
    console.log({ parmanentAddress: parmanentAddress });
}
