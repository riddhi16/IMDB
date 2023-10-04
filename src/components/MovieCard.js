
const MovieCard = ({movie}) => {
    return (
        <div className="movie-card"  >
            <h3>{movie.title}</h3>
            <div className="Card-image-Wrapper" >
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
            </div>
            <button>Add to Favrouites</button>
        </div>
    )
}
export default MovieCard;