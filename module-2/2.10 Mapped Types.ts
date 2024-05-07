{
    //* maped types
    // by this type we can map and convert one type to another type

    const arrOfNumbers: number[] = [1, 2, 3]

    // const arrOfString: string[] = ['1', '2', '3']
    const arrOfString = arrOfNumbers.map(number => number.toString())
    
    
    type AreaNumber = {
        height: number;
        width: number;
    }
    
    type Height = AreaNumber['height']  //look up type

    type AreaString<T> = {
        [key in keyof T]: T[key];
    }

    const area1: AreaString<{height: string; width: number}> = {
        height: '100',
        width: 50,
    }
}