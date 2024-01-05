import { Route, Routes } from "react-router-dom";
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages";


export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element= {<MovieList/>}/>
            <Route path="movie/:id" element= {<MovieDetail/>}/>
            <Route path="search" element= {<Search/>}/>
            <Route path="*" element= {<PageNotFound/>}/>
        </Routes>
    </>
  )
}