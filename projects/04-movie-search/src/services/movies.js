const API_KEY = 'ac9cc65e';

// Function to search for movies using the OMDb API
export const searchMovies = async ({ search }) => {

    // If the search term is empty, return null to avoid unnecessary API calls
    if (search == '') return null

    try {
        // Fetch data from the OMDb API using the provided search term and API key
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        
        // Parse the response into JSON format
        const json = await response.json()

        // Extract the 'Search' array from the JSON response, which contains the list of movies
        const movies = json.Search

        // Map the list of movies to a simpler format containing only the relevant details
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch (e) {
        // If an error occurs during the fetch or processing, throw an error with a descriptive message
        throw new Error('Error searching movies')
    }
}
