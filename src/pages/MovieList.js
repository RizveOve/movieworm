import React, { useEffect, useState } from 'react';
import { Card } from '../components';

export const MovieList = ({url}) => {
  const [movies, setMovies] = useState([]);
 const newUrl= "https://api.themoviedb.org/3/"+url+"?api_key="+process.env.REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(newUrl)
      const data = await response.json()
      setMovies(data.results)
    }

    fetchMyAPI()
  }, [newUrl])

  return (
    <main className='mt-6 justify-center flex'>
      <div className='flex flex-wrap justify-center max-w-screen-xl' >
       {movies.map((movie)=>(
        <Card movie= {movie} key= {movie.id} />
       ))}
      </div>
    </main>
  )
}
