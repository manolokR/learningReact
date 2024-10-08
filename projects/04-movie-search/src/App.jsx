
import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import debounce from 'just-debounce-it'

// Custom hook to handle search input
function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  //useRef to check if it is the first input and not show error message
  const isFirstInput = useRef(true)


  useEffect(() => {

    if (isFirstInput.current) {
      //set isFirstInput to false after first input
      isFirstInput.current = search == ''
      return
    }

    if (search == '') {

      setError('Please enter a movie name')
      return

    }

    if (search.match(/^\d+$/)) {

      setError('Please enter a valid movie name')
      return

    }

    if (search.length < 3) {

      setError('Movie name should be atleast 2 characters')
      return

    }

    setError(null)


  }, [search])

  return { search, updateSearch, error }
}

function App() {

  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })


  // Debounce the getMovies function to avoid making too many API calls and improve performance
  //useCallback to avoid creating a new function on every render
  const debouncedGetMovies = useCallback(

    debounce(search => {
      console.log('search', search)
      getMovies({ search })

    }, 300)
    , [getMovies]
  )


  // Handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior (e.g., page reload)
    event.preventDefault()
    getMovies(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(event.target.value)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)


  }


  return (



    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form className='form' onSubmit={handleSubmit}>

          <input onChange={handleChange} value={search} name="query" placeholder='Avengers, Star Wars, Mad Max...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>

        {
          loading ? <p>Loading...</p> : <Movies movies={movies} />


        }



      </main>
    </div>


  )
}

export default App
