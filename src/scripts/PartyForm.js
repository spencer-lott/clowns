import { sendReservations } from "./dataAccess.js"

export const PartyForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="reservationParentName">Parent Name</label>
            <input type="text" name="reservationParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationChildName">Child Name</label>
            <input type="text" name="reservationChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationPartySize">Party Size</label>
            <input type="number" name="reservationPartySize" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationHoursLength">Party Length in Hours</label>
            <input type="number" name="reservationHoursLength" class="input" />
        </div>


        <button class="button" id="submitReservation">Submit Reservation</button>
    `
    const mainContainer = document.querySelector("#container")

    return html
}
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='reservationParentName']").value
        const userChildName = document.querySelector("input[name='reservationChildName']").value
        const userPartySize = document.querySelector("input[name='reservationPartySize']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userHours = document.querySelector("input[name='reservationHoursLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            partySize: userPartySize,
            address: userAddress,
            neededBy: userDate,
            hours: userHours
        }

        // Send the data to the API for permanent storage
        sendReservations(dataToSendToAPI)
    }
})

