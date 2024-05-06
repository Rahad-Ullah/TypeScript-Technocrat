{
    //* Interface vs Type alias
    // Recommended: 1. Use interface for only Object
    //              2. Use type alias for all other types

    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }


    // interface extending
    type UserWithRole1 = User1 & {role: string}
    
    interface UserWithRole2 extends User1 {role: string}


    // interface for array
    type Roll = number[]

    interface Roll2 {
        [index: number]: number
    }


    // interface for function
    type Add = (num1: number, num2: number) => number;

    interface Add2{
        (num1: number, num2: number): number;
    }

    
}