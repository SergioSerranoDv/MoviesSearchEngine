/** @format */

import React from 'react'

function listOfMovies({ movies }: any) {
  return (
    <ul className="gridMovies">
      {movies.map((movie: any) => (
        <li key={movie.id} className="movie">
          <h2>{movie.title}</h2>
          <img src={movie.poster} alt={movie.title}></img>
        </li>
      ))}
    </ul>
  )
}
function noMoviesResult() {
  return <p>No movies found</p>
}

export function Movies({ movies }: any) {
  const hasMovies = movies?.length > 0
  return (
    <div className="containerMovies">
      {hasMovies ? listOfMovies({ movies }) : noMoviesResult()}
    </div>
  )
}
