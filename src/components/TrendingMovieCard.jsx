import React from 'react'

function TrendingMovieCard({movie, index}) {
    return (
        <li key={movie.$id}>
            <p>{index + 1}</p>
            <img src={movie.poster_url} alt={movie.title} />
        </li>
    )
}

export default TrendingMovieCard