import { useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // Create a ref to store the previous search term and avoid unnecessary API calls
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if (search === previousSearch.current) {
      return
    }

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)

    }catch(e){
      setError(e.message)

    
    }finally{
      // Set loading to false regardless of success or failure
      setLoading(false)
    } 
  }
  // Sort the movies by title if the sort flag is enabled
  //const sortMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies

  // Use the useMemo hook to avoid sorting the movies on every render
  const sortedMovies = useMemo(() => {

    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies

  },[sort,movies])

  return { movies : sortedMovies, getMovies,loading }
}