"use strict";
{
    //* object destructuring
    var user_1 = {
        id: 101,
        name: {
            firstName: 'Md.',
            middleName: 'Rahad',
            lastName: 'Ullah',
        },
        contactNo: '01700000000',
        address: 'Dhaka',
    };
    var contactNo = user_1.contactNo, middleName = user_1.name.middleName;
    // * array destructuring
    var myFriends = ['Suhag', 'Nazmul', 'Yasin', 'Shahin', 'Rahat', 'Sujon'];
    var b = myFriends[1], c = myFriends[2], kobi = myFriends[4], rest = myFriends.slice(5);
    console.log(kobi);
}
