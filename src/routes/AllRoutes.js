import { Route, Routes } from "react-router-dom";
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages";


export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element= {<MovieList url= "movie/now_playing" />}/>
            <Route path="movies/popular" element= {<MovieList url= "movie/popular"/>}/>
            <Route path="movies/top" element= {<MovieList url= "movie/top_rated"/>}/>
            <Route path="movies/upcoming" element= {<MovieList url= "movie/upcoming"/>}/>
            <Route path="movie/:id" element= {<MovieDetail/>}/>
            <Route path="search" element= {<Search/>}/>
            <Route path="*" element= {<PageNotFound/>}/>
        </Routes>
    </>
  )
}
