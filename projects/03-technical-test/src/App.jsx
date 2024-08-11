import { useEffect, useState } from "react"
import './App.css'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true`
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export function App() {

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    //We could do it in just one useEffect, but it is better to separate the fetch requests for the fact and the image 
    //to make the code more readable and maintainable

    //We can use the useEffect hook to make a fetch request to the cat fact api
    //The dependencies array is empty so the fetch request will only be made once at the start of the component
    //useEffect for fetching the random cat fact
    useEffect(() => {

        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(response => response.json())
            .then(data => {
                const { fact } = data
                setFact(data.fact)

            })

    }, [])

    //useEffect for fetching the cat image
    useEffect(() => {
        if(!fact) return
        //I was asked to only display the first word of the fact, but I would prefer to display the first three words 
        //to show how slice and join can be used to manipulate arrays
        //Other alternative would be fact.split(' ',3).join('') to get the first three words
        const firstWord = fact.split(' ').slice(0, 3).join(' ')
        console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    }, [fact])


    //We should use conditional rendering to only display the fact if it exists
    return (
        <main>
            <h1>Cats app</h1>

            <section>

                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}

            </section>

        </main>


    )


}