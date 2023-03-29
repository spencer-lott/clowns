import { getClowns, getReservations, deleteRequest, sendCompletionRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteRequest(parseInt(reservationId))
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
    }
})


// This is empty for now until it's used later. It converts the description to a list element
const convertRequestToListElement = (requestObject) => {
    const clowns = getClowns()
    return `<li>${requestObject.childName}'s Party
        <select class="clowns" id="clowns">
            <option value="">Choose</option>
     ${
            clowns.map(
                clown => {
                    return `<option value="${requestObject.id}--${clown.id}">${clown.name}</option>`
             }
            ).join("")
        }
        </select>
    <button class="request__delete" id="reservation--${requestObject.id}">Deny
</button>
</li>`
}



//This function completes the one above. You can use other data in the same way
export const Reservations = () => {
    const reservations = getReservations()

    let html = `
        <ul> 
            ${
                //going through each request object, finding the description, and then joining them together
                reservations.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")
            
            const completion = {
                reservationId: reservationId,
                clownId: clownId,
                date_created: Date.now()}

            sendCompletionRequest(completion)

        }
    }
)