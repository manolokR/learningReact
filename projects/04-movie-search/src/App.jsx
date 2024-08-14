
import './App.css'
import responseMovies from './mocks/with-Results.json'
import withoutResults from './mocks/no-results.json'


function App() {

  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <>


      <div className="page">
        <header>
          <h1>Movie Search</h1>
          <form className='form'>

            <input placeholder='Avengers, Star Wars, Mad Max...' />
            <button type='submit'>Search</button>
          </form>
        </header>
      </div>


      <main>

        {
          hasMovies ? (

            <ul className='movies'>

              {
                movies.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} />
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                  </li>
                ))


              }
            </ul>

          )
            : (

              <p>No movies found</p>
            )
        }


      </main>
    </>


  )
}

export default App
