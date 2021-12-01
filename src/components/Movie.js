import PropTypes from "prop-types"
import {Link} from "react-router-dom"

const Movie=({id,cover,title,summary,genres})=>{
    return (
        <li>
            <img src={cover} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map(genre=><li key={genre}>{genre}</li>)}
            </ul>
        </li>
    )
}

Movie.propTypes={
    id:PropTypes.number.isRequired,
    cover:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie