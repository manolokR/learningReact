
import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useRef } from 'react'


function App() {

      // Destructure the `movies` array from the custom hook `useMovies`
      const {movies} = useMovies()


      // Handle form submission
      const handleSubmit = (event) => {
        // Prevent the default form submission behavior (e.g., page reload)
        event.preventDefault()
        // Extract the `query` value from the submitted form data
        const {query} = Object.fromEntries(new FormData(event.target))
        console.log({query})
      }


  return (
   


      <div className="page">
        <header>
          <h1>Movie Search</h1>
          <form className='form' onSubmit={handleSubmit}>

            <input name="query" placeholder='Avengers, Star Wars, Mad Max...' />
            <button type='submit'>Search</button>
          </form>
        </header>

        <main>

          <Movies movies={movies} />

        </main>
      </div>


  )
}

export default App
