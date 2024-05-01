const database = {
    venues: [
        {
            name: "Big Stage",
            address: "123 Broadway, New York, NY",
            sqFt: 5000,
            maxCap: 300,
            bookingDate: "06/14/2024",
            bandName: "The Electric Zebras, Jacob Dorris Band"
        },
        {
            name: "BumsOutside",
            address: "456 Main St, Los Angeles, CA",
            sqFt: 3500,
            maxCap: 200,
            bookingDate: "07/22/2024",
            bandName: "Rhythmic Fission, Eternal Blue"
        },
        {
            name: "Club Chicago",
            address: "789 Club Ave, Chicago, IL",
            sqFt: 4500,
            maxCap: 250,
            bookingDate: "01/22/2025",
            bandName: "The Electric Zebras, Jacob Dorris Band"
        },
        {
            name: "Mountaineer",
            address: "46 HitADeer Lane, Bumchuck, WV",
            sqFt: 1200,
            maxCap: 120,
            bookingDate: "10/21/2024",
            bandName: "Rhythmic Fission, Eternal Blue"
        }
    ],
    bands: [
        {
            name: "The Electric Zebras",
            numberOfMembers: 5,
            genre: "Rock",
            yearFormed: 2010,
            venueName: "Club Chicago, Big Stage"
        },
        {
            name: "Jacob Dorris Band",
            numberOfMembers: 6,
            genre: "Reggae",
            yearFormed: 2008,
            venueName: "Club Chicago, Big Stage"
        },
        {
            name: "Rhythmic Fission",
            numberOfMembers: 4,
            genre: "Hip-Hop",
            yearFormed: 2012,
            venueName: "Mountaineer, BumsOutside"
        },
        {
            name: "Eternal Blue",
            numberOfMembers: 7,
            genre: "Blues",
            yearFormed: 2000,
            venueName: "Mountaineer, BumsOutside"
        }
     ],
    bookings: [
        {
            bandName: "Jacob Dorris Band",
            venueName: "Club Chicago",
            bookingDate: "01/22/2025"
        },
        {
            bandName: "Jacob Dorris Band",
            venueName: "Big Stage",
            bookingDate: "06/14/2024"
        },
        {
            bandName: "The Electric Zebras",
            venueName: "Club Chicago",
            bookingDate: "01/22/2025"
        },
        {
            bandName: "The Electric Zebras",
            venueName: "Big Stage",
            bookingDate: "06/14/2024"
        },
        {
            bandName: "Rhythmic Fission",
            venueName: "Mountaineer",
            bookingDate: "10/21/2024"
        },
        {
            bandName: "Eternal Blue",
            venueName: "Mountaineer",
            bookingDate: "10/21/2024"
        },
        {
            bandName: "Rhythmic Fission",
            venueName: "BumsOutside",
            bookingDate: "10/21/2024"
        },
        {
            bandName: "Eternal Blue",
            venueName: "BumsOutside",
            bookingDate: "07/22/2024"
        }
    ]
}


export const getVenues = () => {
    return database.venues.map(venues => ({...venues}))
}

export const getBands = () => {
    return database.bands.map(bands => ({...bands}))
}

export const getBookings = () => {
    return database.bookings.map(bookings => ({...bookings}))
}