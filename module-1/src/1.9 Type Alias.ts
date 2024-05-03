{

//* type alias for object
type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;     //optional type
    address: string;
}

const student1: Student = {
    name: 'Rahad',
    age: 21,
    gender: 'Male',
    contactNo: '0170000000',
    address: 'Sylhet'
}

const student2: Student = {
    name: 'Rasel',
    age: 20,
    gender: 'Male',
    address: 'Tangail',
}



//* type alias for string
type UserName = string;

const userName: UserName = 'Noman';


//* type alias for boolean
type IsAdmin = boolean;

const isAdmin: IsAdmin = true;



//* type alias for Function
type Add = (num1: number, num2: number) => number;

const add: Add = (nm1, nm2) => nm1 + nm2;


}