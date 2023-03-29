import { PartyForm } from "./PartyForm.js"
import { Reservations } from "./Reservations.js"

export const Clowns = () => {
    return `
        <h1>Buttons the Clown's Party service</h1>
        <section class="partyForm">
            ${PartyForm()}
        </section>

        <section class="partyReservations">
            <h2>Party Reservations</h2>
            ${Reservations()}
        </section>
    `
}