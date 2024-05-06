{
    //* Generic Type
    type GenericArray<T> = Array<T>
    

    // const rollNumbers: number[] = [3, 5, 7]
    const rollNumbers: GenericArray<number> = [3, 5, 7]

    // const mentors: string[] = ['Rahad', 'Noman', 'Tuhin']
    const mentors: Array<string> = ['Rahad', 'Noman', 'Tuhin']

    // const boolArray: boolean[] = [true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true]

    interface User{
        name: string;
        age: number;
    }
    
    const users: GenericArray<User> = [
        {
            name: 'Rahad',
            age: 25,
        },
        {
            name: 'Noman',
            age: 21,
        }
    ]



    // * Generic Touple
    type GenericTouple<X, Y> = [X, Y]

    const persons: GenericTouple<string, string> = ['Mr. X', 'Mr. Y']

    const usersWithId: GenericTouple<number, {name: string, age: number}> = [
        101,
        {
            name: 'Rahad',
            age: 25
        }
    ]
    
    
}