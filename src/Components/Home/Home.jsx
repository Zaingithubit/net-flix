import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'
const apiKey = "4d34b98aadf89c8ad7822f8f926d73c5"
const url = 'https://api.themoviedb.org/3'
const imgurl ='https://image.tmdb.org/t/p/w500/'
const upcoming ="upcoming"
const topRatedUrl="top_rated"
const popularUrl = "popular"
const nowPlayingUrl= "now_playing"
const Card = ({img})=>(
<img className='card' src={img} alt="" />
)
const Row =({title ,arr=[]})=>(
  <div className='row'>
  <h1>{title}</h1>
  <div>
  
{
    arr.map((item ,index)=>{
      return  <Card img={`${imgurl}${item.poster_path}`} key={index}/>
     }
    )
}
  </div>
  </div>
)
const Home = () => {
  const [upComingMovie , setupComingMovie]=useState()
  const [topRatedMovie , setTopRatedMovie]=useState()
  const [popular , setPopularMovie]=useState()
  const [nowPlaying , setNowPlayingMovie]=useState()
  useEffect(() => {
    const upComing =async()=>{
     const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
     setupComingMovie(results)
     console.log(results)
    } 
    const topRatedMovies =async()=>{
     const {data:{results}} = await axios.get(`${url}/movie/${topRatedUrl}?api_key=${apiKey}`)
     setTopRatedMovie(results)
     console.log(results)
    } 
    const nowPlayingMovies =async()=>{
     const {data:{results}} = await axios.get(`${url}/movie/${nowPlayingUrl}?api_key=${apiKey}`)
     setNowPlayingMovie(results)
     console.log(results)
    } 
    const popularMovie =async()=>{
     const {data:{results}} = await axios.get(`${url}/movie/${popularUrl}?api_key=${apiKey}`)
     setPopularMovie(results)
     console.log(results)
    } 
    upComing()
    nowPlayingMovies()
    popularMovie()
    topRatedMovies()
  
  }, )
  
  return (
    <section className="home">
      <div className="banner"></div>
      <Row  title={"Upcoming Movies on Netflix"} arr={upComingMovie}/>
      <Row  title={"Now-Playing Movies on Netflix"} arr={nowPlaying}/>
      <Row  title={"Top-Rated Movies on Netflix"} arr={topRatedMovie}/>
      <Row  title={"Popular Movies on Netflix"} arr={popular}/>
     
    </section>
  )
}

export default Home
