import { Injectable } from '@angular/core';

@Injectable()

/** slice 0 is taking the data starting from index 0 */
export class PersonsService {
    visiblePersons = [];
    getPersons() {
        return this.visiblePersons = PERSONS.slice(0);
    }
    /** of the records found return the one with the id we pass to the function */
    getPerson(id: number) {
        return PERSONS.slice(0).find(person => person.id == id);
    }
}

const PERSONS = [
    {
        "id": 1,
        "type": "executive",
        "url": "https://farm1.staticflickr.com/46/171162270_98941e541b.jpg",
        "name": "Amanda Jones",
        "email": "ajones@company.com",
        "dob": "04/05/76",
        "doh": "01/01/2014",
        "supervisor": "Board of Directors",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        "id": 2,
        "type": "manager",
        "url": "https://farm2.staticflickr.com/1032/5182289238_8785969c9b.jpg",
        "name": "John Ashcroft",
        "email": "jashcroft@company.com",
        "dob": "10/22/82",
        "doh": "10/15/13",
        "supervisor": "Amanda Jones",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        "id": 3,
        "type": "manager",
        "url": "https://farm4.staticflickr.com/3499/3822444885_fe9698ee01.jpg",
        "name": "Becky Smith",
        "email": "bsmith@company.com",
        "dob": "05/25/84",
        "doh": "09/01/13",
        "supervisor": "Amanda Jones",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        "id": 4,
        "type": "staff",
        "url": "https://farm2.staticflickr.com/1155/700878135_2183b8cb53.jpg",
        "name": "Stephen Morris",
        "email": "smorris@company.com",
        "dob": "7/10/87",
        "doh": "09/01/15",
        "supervisor": "John Ashcroft",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        "id": 5,
        "type": "staff",
        "url": "https://farm5.staticflickr.com/4035/4468109571_ca98c0e21e.jpg",
        "name": "Greg Little",
        "email": "glittle@company.com",
        "dob": "11/07/85",
        "doh": "04/15/15",
        "supervisor": "John Ashcroft",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        "id": 6,
        "type": "staff",
        "url": "https://farm3.staticflickr.com/2753/4076972939_7c5e8b4b1f.jpg",
        "name": "Bob Thompson",
        "email": "bthompson@company.com",
        "dob": "08/20/84",
        "doh": "01/02/15",
        "supervisor": "John Ashcroft",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    }
]