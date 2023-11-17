# Nashrun_HotelAdministration
The Hotel Administration system module provides functions to retrieve information on **rooms** 

# Installation

Download Node.js before getting started [download Node.js](https://nodejs.org/en/download). This node module was done with Node.js v21.0.0.

# Getting Started

In order to use the functions, create an **app.js** file.

Next, create a variable as follow:

```javascript
const hotel = require("./Nashrun_HotelAdministration.js");
```

# The Arrays

The following arrays is initialized to stimulate the storage and retrieval of `dummy datas`
- `rooms` array is to store & retrieve the hotel rooms as shown:

```javascript
const rooms = [
    201, 202, 203, 204, 205,
    301, 302, 303, 304, 305,
    401, 402, 403, 404, 405,
    501, 502, 503, 504, 505,
    601, 602, 603, 604, 605,
    701, 702, 703, 704, 705,
];
```

- `reservations` array is to store & retrieve elements that represent reservation object with reservation with details as shown:

```javascript
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
```

# Book Reservation Function
The function `bookReservation` allows the user to book a room.

This function takes 4 parameters: `name`, `startDate`, `endDate`, and `roomNum`

If the reservation does not exist in `reservations` array, it will add a new reservation in the array with the parameters.

## How to use
1. Declare variables:
```javascript
const name = 'Nash'; //Example name
const startDate = '03/12/2023';
const endDate = '05/12/2023';
const roomNum = 305;
```

2. Call function using variables:
```javascript
hotel.bookReservation(name, startDate, endDate, roomNum);
```
- If a room is unavailable, it will print out:
```
room unavailable
```
- If a room does not exist in the `rooms` array, it will print out:
```
Room does not exist. Please check available rooms using the checkRooms() Function.
```

3. Output:
```
success, your booking details:
        Name: Nash
        Room Number: 305
        From: 03/12/2023
        To: 05/12/2023
Thank you and enjoy your stay.
```
Once successful, it will push the data into `reservations` array as an object with the values and checkIn/checkOut set as false by default.

# Check In Guest Function
The function `checkInGuest` checks in the guest.

This function takes a single parameter: `roomNum`.

## How to use
1. Call function:
```javascript
hotel.checkInGuest(305);
```
- If the room number does not exist in `reservations` array, it will print out:
```
No reservation found for Room 305
```
- If the guest has already checked in, it will print out:
```
Guest have already checked in
```
- If guest has already checked in & out afterwards, it will print out:
```
Guest have already checked out
```

2. Output:
```
Nash checked in to Room 305
```
Once successful, it will set the checkIn element as `true`.

# Check Out Guest Function
The function `checkOutGuest` checks out the guest.

This function takes a single parameter: `roomNum`

## How to use
1. Call function:
```javascript
hotel.checkOutGuest(305);
```
- If the guest has not checked in yet, it will print out:
```
Please check in
```
- If the guest has already checked out, it will print out:
```
Guest has already checked out
```

2. Output:
```
Nash checked out of Room 305
```
Once successful, it will set the checkOut element as `true`.

# Check Available Rooms Function
The function `checkRooms` checks for available rooms.

A new array is formed, `availableRooms`, using `rooms` array subtracted by the rooms taken from `reservations` array.

## How to use
1. Call function:
```javascript
hotel.checkRooms();
```

2. Output:
```
[
    203, 204, 205,
    301, 302, 303, 304, 305,
    401, 402, 403, 404, 405,
    501, 502, 503, 504, 505,
    601, 602, 603, 604, 605,
    701, 702, 703, 704, 705,
];
```

# Check Reservation Details Function
The function `checkReservations` checks reservation details.

This function takes 2 parameters: `name` and `roomNum`

## How to use
1. Call function:
```javascript
hotel.checkReservations('Nash', 305);
```

2. Output:
```
Thank you. Here are your details

        Name: Nash
        Room Number: 305
        From: 03/12/2023
        To: 05/12/2023
        Checked in: false
        Checked out: false
```