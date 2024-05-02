// normal function
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function = method
const richUser = {
    name: 'Rahad',
    balance: 0,
    addBalance (balance: number): number {
        return this.balance + balance;
    }
}

// callback function
const prices: number[] = [102, 103, 104, 105]

const sqrPrices: number[] = prices.map((price: number): number => price * price)