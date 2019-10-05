import React from 'react'
import './Movie.css'
import PropsType from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'

Movie.PropsType = {
    title: PropsType.string.isRequired,
    poster: PropsType.string.isRequired,
    genres: PropsType.array.isRequired,
    synopsis: PropsType.string.isRequired,
    year: PropsType.number.isRequired
}
function Movie({ title, poster, genres, synopsis, year}) {
    return (
        <div className='movie'>                           
            <MoviePoster poster={poster} alt={title} />
            <div className='data'>
                <h1>{title}</h1>
                <div>{year}</div>
                <div className='genres'>
                    {genres.map((genre, index) => <MovieGener genre={genre} key={index} />)}
                </div>
                <div>
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
            
            
        </div>
    )
}

MoviePoster.PropsType = {    
    poster: PropsType.string.isRequired,
    alt: PropsType.string
}
function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className='poster'/>
        )
}

MovieGener.PropsType = {
    gener: PropsType.string.isRequired
}
function MovieGener({genre}) {
    return (
        <span>{genre }</span>
    )
}

export default Movie

