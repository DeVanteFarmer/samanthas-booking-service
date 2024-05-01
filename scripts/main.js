import { Venues } from "./venues.js"
import { Bands } from "./bands.js"
import { Bookings } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Sold Out Dates</h1>
<p class="details">
    <section class="bookings">
        <h2>Bookings</h2>
        ${Bookings()}
    </section>
</p> 
    <section class="bv">
        <h2>Venues</h2>
        ${Venues()}
        <h2>Bands</h2>
        ${Bands()}   
    </section>
`

mainContainer.innerHTML = applicationHTML