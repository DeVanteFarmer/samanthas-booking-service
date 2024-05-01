import { getVenues, getBands } from "./database.js";

const venues = getVenues();
const bands = getBands();

// Helper function to find bands by venue 
const findBandsForVenue = (venueName) => {
    const bandsAtVenue = bands.filter(band =>
        band.venueName.split(', ').includes(venueName)
    ).map(band => band.name);
    return bandsAtVenue.length ? bandsAtVenue.join(', ') : "No bands booked.";
}

export const Venues = () => {
    let venuesHTML = "<ol>";
    for (const venue of venues) {
        venuesHTML += `<li data-type="venue" class="venue-name">${venue.name}</li>`;
    }
    venuesHTML += "</ol>";
    return venuesHTML;
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.classList.contains("venue-name")) {
        const venueName = itemClicked.textContent;
        const bandsList = findBandsForVenue(venueName);
        alert(`Bands booked at ${venueName}: ${bandsList}`);
    }
});