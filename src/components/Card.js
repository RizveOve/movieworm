import React from 'react';
import { Link } from 'react-router-dom';

export const Card = (props) => {
  return (
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
    <Link to={`/movie/${props.movie.id}`}>
        <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`} alt="" />
    </Link>
    <div className="p-5">
        <Link to={`/movie/${props.movie.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.movie.title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.movie.overview}</p>
        
    </div>
</div>
  )
}
