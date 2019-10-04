import React from 'react'
import './Movie.css'
import PropsType from 'prop-types'

Movie.PropsType = {
    title: PropsType.string.isRequired,
    poster: PropsType.string.isRequired
}
function Movie({title, poster}) {
    return (
        <div>                
            <h1>{title}</h1>
            <MoviePoster poster={poster}/>
        </div>
    )
}

MoviePoster.PropsType = {    
    poster: PropsType.string.isRequired
}
function MoviePoster({poster}) {
    return (
            <img src={poster} alt="movie poster" />
        )
}

export default Movie

