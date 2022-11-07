import React from 'react'
import BasicCard from "./Card";
const MovieList = ({movies,deleteMovie}) => {
  return (
    <div>{movies.map(el=><BasicCard el={el} key={el.id} deleteMovie={deleteMovie}/>)}</div>
  )
}

export default MovieList