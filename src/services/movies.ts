
const API_KEY = 'bd0241f7'
type movie = {
    id: string
    title: string
    poster: string
    year: number
  }[]
export async function searchMovies(search:string): Promise<movie|any> {
    try{
        if(search === '') return
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json  =  await response.json()
        const movies:movie =  json.Search
        return movies?.map( (movie: any) => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year,
        }))
    }catch(e){
        throw new Error("Error getting movies")
    }
   
    
}

