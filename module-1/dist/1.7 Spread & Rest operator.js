"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//* spread operator
var bros1 = ['Mir', 'Firoz', 'Mizan'];
var bros2 = ['Tonmoy', 'Nahid', 'Rahat'];
bros1.push.apply(bros1, bros2); // array spread
var mentors1 = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan',
};
var mentors2 = {
    prisma: 'Firoz',
    next: 'Tonmoy',
    cloud: 'Nahid',
};
var mentors = __assign(__assign({}, mentors1), mentors2);
//* Rest operator
var greetFriends = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.forEach(function (friend) {
        console.log("Hi ".concat(friend));
    });
};
greetFriends('Nazmul', 'Fahim', 'Noman');
