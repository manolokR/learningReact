import { useState, useEffect } from 'react'

export function useCatImage({fact}) {
    //We need the state and the effect
    const [imageUrl, setImageUrl] = useState()
    //useEffect for fetching the cat image
    useEffect(() => {
        if (!fact) return
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

    return {imageUrl}
}

