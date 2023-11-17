// Array of rooms in total
const rooms = [
    201, 202, 203, 204, 205,
    301, 302, 303, 304, 305,
    401, 402, 403, 404, 405,
    501, 502, 503, 504, 505,
    601, 602, 603, 604, 605,
    701, 702, 703, 704, 705,
];

// Array to store & retrieve dummy data
const reservations = [
    {
        name: 'Steve',
        startDate: '11/12/2023',
        endDate: '13/12/2023',
        checkIn: false,
        checkOut: false,
        roomNum: 201,
    },
    {
        name: 'John',
        startDate: '20/11/2023',
        endDate: '23/11/2023',
        checkIn: false,
        checkOut: false,
        roomNum: 202,
    },
    {
        name: 'Molly',
        startDate: '25/11/2023',
        endDate: '27/11/2023',
        checkIn: false,
        checkOut: false,
        roomNum: 207,
    }
];

// Function to book reservation
function bookReservation(name, startDate, endDate, roomNum) {

    // JSON object to insert into reservations array
    const reserve = {
        name: name,
        startDate: startDate,
        endDate: endDate,
        checkIn: false,  //declared false by default
        checkOut: false, //declared false by default
        roomNum: roomNum,
    };

    // finding room number that is already in reservations array
    const reservation = reservations.find(reservation =>
        reservation.roomNum == roomNum
        );
    // if a room is already in the reservations array
    if(reservation) {
        console.log('room unavailable');

    } 
    // if a room does not exist in the rooms array
    else if(rooms.includes(roomNum) == false) {
        console.log('Room does not exist. Please check available rooms using the checkRooms() Function.');
    }
    // if room number is valid & does not exist in reservations array
    else {
        //push JSON object(reserve) into reservations array
        reservations.push(reserve);
        // let index = reservations.length - 1
        console.log(`success, your booking details:
        Name: ${reserve.name}
        Room Number: ${reserve.roomNum}
        From: ${reserve.startDate}
        To: ${reserve.endDate}
Thank you and enjoy your stay.`);
    }
}

// Function to check in hotel
function checkInGuest(roomNum) {

    // find existing roomnumber in reservations & have not checked in
    const reservation = reservations.find(reservation =>
        reservation.roomNum == roomNum && !reservation.checkIn
    );

    // if not checked in yet
    if(reservation) {
        reservation.checkIn = true;
        console.log(`${reservation.name} checked in to Room ${reservation.roomNum}`);
    } 
    // if already checked in
    else if(reservations.find(reservation =>
        reservation.checkIn == true && reservation.roomNum == roomNum && reservation.checkOut == false
    )) {
        console.log('Guest have already checked in');
    }

    else if(reservations.find(reservation =>
        reservation.checkOut == true
    )) {
        console.log('Guest has already checked out')
    }
    
    //if no such room reserved
    else {
        console.log(`No reservation found for Room ${roomNum}`);
    }
}

// Function to check out hotel
function checkOutGuest(roomNum) {

    //get index of room that was checked out
    let index = rooms.indexOf(roomNum);

    // find existing roomnumber in reservations that already checked in
    const reservation = reservations.find(reservation =>
        reservation.roomNum == roomNum && reservation.checkIn
    );

    // if reservation exist and guest has already checked in
    if(reservation) {
        //sets checkIn as false
        // reservation.checkIn = false;
        //sets checkOut as true
        reservation.checkOut = true;
        //adds the room back at the same index in rooms array
        rooms.splice(index, 0, roomNum);
        console.log(`${reservation.name} checked out of Room ${reservation.roomNum}`);
    } 
    // if guest has already checked out
    else if(reservations.find(reservation =>
        reservation.checkOut == true
    )) {
        console.log('Guest has already checked out')
    }
    
    else {
        console.log(`Please check in`);
    }
}

// Function to check available rooms
function checkRooms() {
    //array from rooms
    const availableRooms = rooms;

    //for loop to find every room number in reservations array
    for (let i = 0; i < reservations.length; i++) {
        //random variable name: a
        a = reservations[i].roomNum;

        //declares index for every index taken from reservations array converted to rooms array
        let index = availableRooms.indexOf(a)

        //removes the roomnumber from reservations array in rooms array
        availableRooms.splice(index, 1);
      }

      console.log(`available rooms are:`, availableRooms);
}

// Function to check booking by name & room number
function checkReservations(name, roomNum) {

    // find existing name and room number in reservations
    const reservation = reservations.find(reservation =>
        reservation.name == name && reservation.roomNum == roomNum
    );

    // if name AND room number exist in ONE JSON object
    if(reservation) {
        console.log(`
        Thank you. Here are your details

        Name: ${reservation.name}
        Room Number: ${reservation.roomNum}
        From: ${reservation.startDate}
        To: ${reservation.endDate}
        Checked in: ${reservation.checkIn}`,   // if true: user has checked in
        `
        Checked out: ${reservation.checkOut}` // if true: user has checked out
        );
    } else {
        console.log("Wrong name or room number or both. Please try again");
    }
}

module.exports = {
    bookReservation,
    checkInGuest,
    checkOutGuest,
    checkReservations,
    checkRooms
}