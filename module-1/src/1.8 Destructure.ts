{

//* object destructuring
const user = {
    id: 101,
    name: {
        firstName: 'Md.',
        middleName: 'Rahad',
        lastName: 'Ullah',
    },
    contactNo: '01700000000',
    address: 'Dhaka',
}

const {
    contactNo,
    name: {middleName},
} = user;


// * array destructuring

const myFriends: string[] = ['Suhag', 'Nazmul', 'Yasin', 'Shahin', 'Rahat', 'Sujon']

const [, b, c, , kobi, ...rest] = myFriends;

}