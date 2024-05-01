import { getBookings, getVenues, getBands } from "./database.js";

const bookings = getBookings();
const venues = getVenues();
const bands = getBands();


// Helper function to find band info based on the clicked list item
const findBandInfoForBooking = (li) => {
    const bookingDate = li.dataset.bookingDate;
    const bandName = li.textContent.split(' are playing at ')[0];  // Assuming the format is "BandName are playing at VenueName on Date"

    const band = bands.find(band => band.name === bandName);
    if (!band) {
        return "No band info";
    }

    return `${band.name} (Genre: ${band.genre}, Formed: ${band.yearFormed}, Members: ${band.numberOfMembers})`;
};
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
/*

This function is modified to accept an HTML list item (li) element as a parameter. 
It then:
1. Extracts the bookingDate from the li element's data attributes.
2. Extracts the bandName by splitting the text content of the li element. This split 
assumes a specific format for the list item text ("BandName are playing at VenueName 
on Date").
3. Uses the extracted bandName to find the corresponding band object from the bands array.
4. If a band is found, it returns a formatted string with the band's name, genre, year 
formed, and number of members. If not, it returns "No band info".

*/

export const Bookings = () => {
    let bookingsHTML = "<ol>";
    for (const booking of bookings) {
        bookingsHTML += `<li data-booking-date="${booking.bookingDate}" class="booking-info">${booking.bandName} are playing at ${booking.venueName} on ${booking.bookingDate}</li>`;
    }
    bookingsHTML += "</ol>";
    return bookingsHTML;
};

// Event listener for displaying band information when a booking is clicked
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.classList.contains("booking-info")) {
        const bandInfo = findBandInfoForBooking(itemClicked);
        alert(`Band info: ${bandInfo}`);
    }
});

