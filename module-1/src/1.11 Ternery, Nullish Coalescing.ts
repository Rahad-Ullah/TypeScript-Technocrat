{

// * Ternary Operator
const age = 18;
const isAdult = age >= 18 ? 'adult' : 'not adult';
// console.log({isAdult});


// * nullish coalescing operator
// null / undefined --> decision making

const isAuthenticated = '';

const result1 = isAuthenticated ? isAuthenticated : 'Guest';    // ternary
const result2 = isAuthenticated ?? 'Guest';     // nullish coalescing

// console.log({result1}, {result2});


type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        parmanentAddress?: string;
    }
}

const user: User = {
    name: 'Rahad',
    address: {
        city: 'Sylhet',
        road: 'Ambarkhana',
        presentAddress: 'Sylhet Town',
    }
}

const parmanentAddress = user?.address?.parmanentAddress ?? 'No address found'
console.log({parmanentAddress});




}