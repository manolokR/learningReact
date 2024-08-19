
import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useEffect, useState, useRef } from 'react'


// Custom hook to handle search input
function useSearch(){
  const [search,updateSearch] = useState('')
  const [error, setError] = useState(null)
  //useRef to check if it is the first input and not show error message
  const isFirstInput = useRef(true)


  useEffect(() => {

    if(isFirstInput.current){
      //set isFirstInput to false after first input
      isFirstInput.current = search==''
      return
    }

    if(search==''){

      setError('Please enter a movie name') 
      return

    }

    if(search.match(/^\d+$/)){

      setError('Please enter a valid movie name') 
      return

    }

    if(search.length<3){

      setError('Movie name should be atleast 2 characters') 
      return

    }

    setError(null)


  },[search])

  return {search, updateSearch, error}
}

function App() {

      // Destructure the `movies` array from the custom hook `useMovies`
      
      const {search,updateSearch, error} = useSearch()
      const {movies,loading,getMovies} = useMovies({search})
      // Handle form submission
      const handleSubmit = (event) => {
        // Prevent the default form submission behavior (e.g., page reload)
        event.preventDefault()
        getMovies()
      }

      const handleChange = (event) => {
        updateSearch(event.target.value)
      }


      

  return (
   


      <div className="page">
        <header>
          <h1>Movie Search</h1>
          <form className='form' onSubmit={handleSubmit}>

            <input onChange={handleChange} value={search} name="query" placeholder='Avengers, Star Wars, Mad Max...' />
            <button type='submit'>Search</button>
          </form>
          {error && <p style={{color:'red'}}>{error}</p>}
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
