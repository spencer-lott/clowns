import { Clowns } from "./Clowns.js"
import { fetchClowns, fetchReservations, fetchCompletions} from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchReservations()
    .then(() => fetchClowns())
    .then(() => fetchCompletions())
    .then(
        () => {
            mainContainer.innerHTML = Clowns()
        }
    )
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()
