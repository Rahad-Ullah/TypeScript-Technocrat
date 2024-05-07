{
    //* conditional type

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false     // conditional type
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any



    // example 2
    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false
    
    type HasTractor = CheckVehicle<'plane'>     // if Sheikh type contains plane or not
    
}