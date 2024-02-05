import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../components';

export const Search = ({url}) => {

  const [search, setSearch] = useState([]);
  const [searchparam] = useSearchParams();

  const searchMovie = searchparam.get('q');


  const newUrl= "https://api.themoviedb.org/3/"+url+"?api_key="+process.env.REACT_APP_API_KEY+"&query="+searchMovie;

   useEffect(() => {
     async function fetchMyAPI() {
       const response = await fetch(newUrl)
       const data = await response.json()
       setSearch(data.results)
     }
 
     fetchMyAPI()
   }, [newUrl])

  return (
    <main className='mt-6 flex justify-center'>
      <div className='max-w-screen-xl flex-wrap flex flex-col justify-center'>
      <section className='p-8 text-3xl text-gray-800 dark:text-white'>
        <p>{search.length === 0? `No result found for '${searchMovie}'`  : `Results for '${searchMovie}'` }</p>
      </section>
      
      <section className='flex flex-wrap justify-center' >
       {search.map((movie)=>(
        <Card movie= {movie} key= {movie.id} />
       ))}
      </section>
      </div>
    </main>
  )
}

