import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'
import { Link } from 'react-router-dom'
import {BiPlus} from "react-icons/bi"
import {FaPlay} from "react-icons/fa"
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
  const [upComingMovie , setupComingMovie]=useState([])
  const [topRatedMovie , setTopRatedMovie]=useState([])
  const [popular , setPopularMovie]=useState([])
  const [nowPlaying , setNowPlayingMovie]=useState([])
  const [genreMovies , setGenreMovies]=useState([])
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
     const {data:{results}} = await axios.get(`${url}/movie/${nowPlayingUrl}?api_key=${apiKey}&page=3`)
     setNowPlayingMovie(results)
     console.log(results)
    } 
    const popularMovie =async()=>{
     const {data:{results}} = await axios.get(`${url}/movie/${popularUrl}?api_key=${apiKey}`)
     setPopularMovie(results)
     console.log(results)
    } 
    const genreMovie =async()=>{
     const {data:{genres}} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
     
     console.log(genres)
     setGenreMovies(genres)
     console.log(genreMovies[0].name)
    } 
    upComing()
    nowPlayingMovies()
    popularMovie()
    topRatedMovies()
    genreMovie()
  
},[] )
  
  return (
    <section className="home">
      <div className="banner"style={{backgroundImage:`url(${imgurl}${popular[19].poster_path})`}}>
      {popular[0] && <h1>{popular[0].original_title}</h1>}
      {popular[0] &&  <p>{popular[0].overview}</p>}
    <div>  <button>  <FaPlay/>Play  </button>
      <button>My-List <BiPlus/></button></div>
     
      </div>
      <Row  title={"Upcoming Movies on Netflix"} arr={upComingMovie}/>
      <Row  title={"Now-Playing Movies on Netflix"} arr={nowPlaying}/>
      <Row  title={"Top-Rated Movies on Netflix"} arr={topRatedMovie}/>
      <Row  title={"Popular Movies on Netflix"} arr={popular}/>

      <div className="genreBox">
        {
          genreMovies.map((item)=>( <Link to={`/genre/${item.id}`} key={item.id} >{item.name}</Link>)    
        
           )
           
        }        
      </div>
     
    </section>
  )
}

export default Home
