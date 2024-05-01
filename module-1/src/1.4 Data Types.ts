// ----------Data Types---------

//* ========== Non-Premitive Types ==========
// string
const firstName: string = "Rahad";

// number
const roll: number = 2024

// boolean
const isAdmin: boolean = true

// undefined
const x: undefined = undefined

// null
const y: null = null

// any type
let z;


//* ========= Premitive Types ==========
// array
const friends: string[] = ['Suhag', 'Nazmul']
const rolls: number[] = [102, 103]

// touple
// touple --> like array --> with order --> type of values
const person: [string, number] = ['Nazmul', 24]

// Object type
const user: {
    readonly company: 'Programming Hero';    //literal type
    firstName: string;
    middleName?: string;    //optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'Programming Hero',
    firstName: 'Rahad',
    lastName: 'Ullah',
    isMarried: true
}