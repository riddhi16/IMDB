import MovieCard from "./MovieCard";
import {useState} from 'react';
import { movies as api } from "../MockData/api";
const MovieListing = () => {
    const {movies , setMovies} = useState(api);
    return (
        <div className="movie-list">{
            api.results.map((movie) =>{
                return ( <MovieCard movie={movie} />);
                // console.log(movie);
            })
          
        }
            
        </div>
    )
}
// console.log(api.);
export default MovieListing;
