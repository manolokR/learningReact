const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

//When separating the fetch requests into a service, we should remove the 'set' function from the fetch request
//Removing setFact makes the function more reusable and easier to test
export const getRandomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await response.json()
    const { fact } = data
    return fact
}

/*Not async getRandomFact function

const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(response => response.json())
            .then(data => {
                const { fact } = data
                return fact

            })
}
*/