{
    //* Generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"    // manually

    type Owner2 = keyof Vehicle;    // dynamically return all key of the object


    // Implement: make a function that return it's specific value
    const getPropertyValue = <O, K extends keyof O>(obj: O, key: K) => {
        return obj[key];
    }

    const user = {
        name: 'Rahad',
        age: 21,
        address: 'Sylhet',
    }
    const result1 = getPropertyValue(user, 'name')

    const car = {
        brand: 'Toyota',
        model: 'F35'
    }
    const result2 = getPropertyValue(car, 'brand')    
    
}