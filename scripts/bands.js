import { getVenues, getBands } from "./database.js";

const venues = getVenues();
const bands = getBands();

// Helper function to find bands by venue 
const findVenuesForBand = (bandName) => {
    const venuesPlayed = venues.filter(venue =>
        venue.bandName.split(', ').includes(bandName)
    ).map(venue => venue.name);
    return venuesPlayed.length ? venuesPlayed.join(', ') : "No Venues booked"
}

export const Bands = () => {
    let bandsHTML = "<ol>";
    for (const band of bands) {
        bandsHTML += `<li data-type="band" class="band-name">${band.name}</li>`
    }
    bandsHTML += "</ol>";
    return bandsHTML;
}
// When a band name is clicked, a window alert should be presented to the user that displays all of the venue at which the band is playing.
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.classList.contains("band-name")) {
        const bandName = itemClicked.textContent;
        const venuesList = findVenuesForBand(bandName);
        alert(`${bandName} booked at : ${venuesList}`);
    }
});