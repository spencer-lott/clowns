const applicationState = {
    reservations: [],
    clowns: [],
    completions: []
}

const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (partyReservations) => {
                // Store the external state in application state
                applicationState.reservations = partyReservations
            }
        )
    }
    export const getReservations = () => {
        return applicationState.reservations.map(reservation => ({...reservation}))
    }

    
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}
export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}


    export const sendReservations = (userServiceRequest) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceRequest)
        }
    
        const mainContainer = document.querySelector("#container")
        return fetch(`${API}/reservations`, fetchOptions)   //location of said heist
        // this changes the string into json, and json turns it into an object
            .then(response => response.json())          // dirty money => clean money (.json())
            .then(() => {                               //take clean money => do stuff with it
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }

    export const deleteRequest = (id) => {
        const mainContainer = document.querySelector("#container")
        return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
            .then(
                () => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                }
            )
    }

    export const sendCompletionRequest = (userServiceCompletion) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceCompletion)
        }
    
        const mainContainer = document.querySelector("#container")
        return fetch(`${API}/completions`, fetchOptions)   //location of said heist
        // this changes the string into json, and json turns it into an object
            .then(response => response.json())          // dirty money => clean money (.json())
            .then(() => {                               //take clean money => do stuff with it
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }
    
    export const fetchCompletions = () => {
        return fetch(`${API}/completions`)
            .then(response => response.json())
            .then(
                (data) => {
                    applicationState.completions = data
                }
            )
    }
    
    
    