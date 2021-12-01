import { useEffect,useState } from "react"
import Movie from "../components/Movie"

const Home=()=>{
    const [loading,setLoading]=useState(true)
    const [movies,setMovies]=useState([])
    const getMovies=async ()=>{
        const response=await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year')
        const json=await response.json()
        setMovies(json.data.movies)
        setLoading(false)
    }

    useEffect(()=>{
       getMovies()
    },[])

    return (
        <div>
            {loading ? <h1>loading...</h1> :
            <ul>
              {movies.map(movie=>{
                return (
                    <Movie key={movie.id} id={movie.id} cover={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />    
                )
              })}  
            </ul>
            }
        </div>
    )
}

export default Home
