{
    //* type assertion
    // type assertion  --> TypeScript কে নির্দিষ্ট কোন টাইপ জোড় করে বলে দেয়া। মানে টাইপস্ক্রীপ্ট থেকে আমি টাইপ ভালো বুঝি এবং সে আমার কথাকেই অন্ধ বিশ্বাস করবে। 

    let anything: any;
    anything = 'Next Level Web Development';
    
    anything = 222;

    // (anything as number).


    const kgToGm = (value: number | string): number | string | undefined => {
        if(typeof value === "string"){
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue}`
        }
        else if(typeof value === "number"){
            return value * 1000;
        }
    }

    const result1 = kgToGm(58) as number
    const result2 = kgToGm('58') as string


    // example-2

    type CustomError = {
        message: string;
    }
    
    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
    }
    
    
}