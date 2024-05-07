{
    //* Inheritence

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(hours: number){
            console.log(`${this.name} will sleep ${hours}`);
        }
    }


    class Student extends Person {
        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }
    }
    

    class Teacher extends Person {
        designation: string;
        
        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address)
            this.designation = designation
        }
        takeClass(classNumber: number){
            console.log(`${this.name} will take ${classNumber} class`);
        }
    }
    

    const student1 = new Student('Rahad', 21, 'Sylhet')
    student1.getSleep(5)

    const teacher1 = new Teacher('Mezba', 35, 'Ctg', 'Professor')
    teacher1.takeClass(7)
    
    
}