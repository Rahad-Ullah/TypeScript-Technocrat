{
    //* Utility types
    //? 1. Pick     --> তুলে আনা

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type Name = Pick<Person, 'name'>
    type NameAge = Pick<Person, 'name' | 'age'>
    
    
    //? 2. Omit  --> বর্জন করা
    type ContactInfo = Omit<Person, 'name' | 'age'>


    //? 3. Require  --> বাধ্যতামূলক
    type PersonRequired = Required<Person>


    //? 4. Pertial  --> অপশনাল
    type PersonPartial = Partial<Person>


    //? 5. ReadOnly --> এডিট করা যাবে না
    type PersonReadOnly = Readonly<Person>
    
    const person1: PersonReadOnly = {
        name: 'Rahad',
        age: 21,
        contactNo: '01700000000'
    }
    // person1.name = 'Noman'

    
    //? 6. Record   --> প্যাটার্ন নির্ধারন করা
    type MyObj = Record<string, number>

    const emptyObj: Record<string, unknown> = {}    //! important topic

    const obj1: MyObj = {
        a: 1,
        b: 2,
        c: 3
    }
}