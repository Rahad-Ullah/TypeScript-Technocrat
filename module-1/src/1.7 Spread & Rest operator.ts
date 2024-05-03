//* spread operator
const bros1: string[] = ['Mir', 'Firoz', 'Mizan']
const bros2: string[] = ['Tonmoy', 'Nahid', 'Rahat']
bros1.push(...bros2)    // array spread

const mentors1 = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan',
}

const mentors2 = {
    prisma: 'Firoz',
    next: 'Tonmoy',
    cloud: 'Nahid',
}

const mentors = {
    ...mentors1,
    ...mentors2,
}



//* Rest operator

const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
        console.log(`Hi ${friend}`);
    });
}

greetFriends('Nazmul', 'Fahim', 'Noman')
