import { Route, Routes } from "react-router-dom";
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages";


export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element= {<MovieList url= "movie/now_playing" title="MovieWorm"/>}/>
            <Route path="movies/popular" element= {<MovieList url= "movie/popular" title="Popular-MovieWorm"/>}/>
            <Route path="movies/top" element= {<MovieList url= "movie/top_rated" title="Top rated-MovieWorm"/>}/>
            <Route path="movies/upcoming" element= {<MovieList url= "movie/upcoming" title="Upcoming-MovieWorm"/>}/>
            <Route path="movie/:id" element= {<MovieDetail/>}/>
            <Route path="search" element= {<Search url= "search/movie"/>}/>
            <Route path="*" element= {<PageNotFound/>}/>
        </Routes>
    </>
  )
}
