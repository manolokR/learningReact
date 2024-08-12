
import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
//Custom hook to fetch the cat image
//Inside a custom hook we can use other hooks like useState and useEffect

export function App() {

    const {fact, refreshRandomFact} = useCatFact()
    const {imageUrl} = useCatImage({fact})
    
    //We could do it in just one useEffect, but it is better to separate the fetch requests for the fact and the image 
    //to make the code more readable and maintainable

    const handleClick = async () => {
       refreshRandomFact()
    }

    //We should use conditional rendering to only display the fact if it exists
    return (
        <main>
            <h1>Cats app</h1>


            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}

        </main>


    )


}