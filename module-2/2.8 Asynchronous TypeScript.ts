{
    //* Promise

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        return data;
        // console.log(data);
    }

    getTodo()
    

    
    type Something = {something: 'something'}

    //* Simulate
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = {something: 'something'}
            if(data){
                resolve(data)
            }else{
                reject('Failed to load data')
            }
        })
    }


    // calling createPromise function
    const showData = async () => {
        const data = await createPromise()  
        return data
        // console.log(data);
    } 

    showData()

    
}