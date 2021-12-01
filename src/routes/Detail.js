import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import styles from "../Detail.module.css"
import PropTypes from "prop-types"

const Detail=()=>{
    const {id}=useParams();
    const [loading,setLoading]=useState(true)
    const [detail,setDetail]=useState({})

    const getMovie=async ()=>{
        const json=await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();

        console.log(json)
        setLoading(false)
        setDetail(json.data.movie)
    }
   
    useEffect(getMovie,[]);
    const title=detail.title
    const cover=detail.medium_cover_image
    const description=detail.description_full

    return (
        
        <div>
            {loading ? <h1>loading...</h1> : 
                <>
                    <p>{detail.title}</p>
                    <div className={styles.imgDiv}>
                        <img src={detail.medium_cover_image} className={styles.img} />
                    </div>
                    <p>{detail.description_full}</p>
                </>
            }
        </div>
    )
}

Detail.propTypes={
    title:PropTypes.string.isRequired,
    cover:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
}

export default Detail;