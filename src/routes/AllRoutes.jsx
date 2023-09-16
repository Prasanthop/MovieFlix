import React, { useEffect } from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import { MovieDetail, MovieList, PageNotFound, Search } from '../pages';



function AllRoutes() {
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return (
    <main className='dark:bg-[#1ECBE1]'>
        <Routes>            
            <Route path="/" element={<MovieList apiPath="movie/now_playing"/>}/>
            <Route path="/movie/:id" element={<MovieDetail/>}/>  
            <Route path="/movies/popular" element={<MovieList apiPath="movie/popular"/>}/>     
            <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated"/>}/>   
            <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}/>   
            <Route path="/search" element={<Search apiPath="search/movie"/>}/> 
            <Route path="/error" element={<PageNotFound/>}/>
            
        </Routes>
    
    </main>
  )
}

export default AllRoutes