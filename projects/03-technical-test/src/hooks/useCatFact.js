import {useState, useEffect} from 'react'
import {getRandomFact} from '../services/facts.js'
export function useCatFact () {
    const [fact, setFact] = useState()

    const refreshRandomFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    //We can use the useEffect hook to make a fetch request to the cat fact api
    //The dependencies array is empty so the fetch request will only be made once at the start of the component
    useEffect(refreshRandomFact, [])

    return {fact, refreshRandomFact}
}