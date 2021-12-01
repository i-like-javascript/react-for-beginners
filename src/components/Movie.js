import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "../Movie.module.css"

const Movie=({id,cover,title,summary,genres})=>{
    return (
        <div className={styles.movieDiv}>
            <div className={styles.imgDiv}>
                <img src={cover} alt={title} className={styles.cover}/>
            </div>
            <div className={styles.textDiv}>
                <h4 className={styles.title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h4>
                <ul className={styles.genreUl}>
                    {genres.map(genre=><li className={styles.genreLi} key={genre}>{genre}</li>)}
                </ul>
                <div className={styles.summaryDiv}>
                    <h5>{summary}</h5>
                </div>
            </div>
        </div>
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