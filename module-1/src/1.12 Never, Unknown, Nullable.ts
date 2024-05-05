{
    //* Null type

    const searchName = (value: string | null) => {
        if(value){
            console.log('Searching...');
        }else{
            console.log('Nothing to search');
        }
    }
    
    searchName(null)



    //* Unknown type   --> We want to catch the actual type in the runtime.
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if(typeof value === "number"){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else if(typeof value === "string"){
            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else{
            console.log('Wrong Input');
        }
    }

    getSpeedInMeterPerSecond(null)



    // * Never Type  --> Never return any type of data
    const throwError = (msg: string): never => {
        throw new Error(msg)
    }

    throwError('Mushkil Hugaya')

    
}