import MovieHeading from "./MovieHeading";
import MovieListing from "./MovieList";
const MovieListWrapper = () => {
    return (
        <div className="movie-list-Wrapper">
            <MovieHeading/>
            <MovieListing/>
        </div>
    )
}
export default  MovieListWrapper;